import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthenticationService} from "../auth.service";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Observable} from "rxjs";


@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!req.headers.get("intercept")) {
      console.log('skipping intercept')
      return next.handle(req);
    } else {

      console.log("intercepting ");
      const username = this.authenticationService.username;
      const password = this.authenticationService.password;
      console.log(username);

      const authCredentials = `${username}:${password}`;
      console.log(authCredentials);
      // creates a Base64-encoded ASCII string from a binary string
      const authHeader = `Basic ${btoa(authCredentials)}`;
      const authReq = req.clone({
        headers: req.headers.set('Authorization', authHeader)
      });
      // Pass the cloned request with the auth header to the next interceptor or to the backend
      return next.handle(authReq);

    }
  }
}
