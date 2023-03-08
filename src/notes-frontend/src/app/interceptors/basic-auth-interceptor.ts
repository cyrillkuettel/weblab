import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthenticationService} from "../auth.service";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";


@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!req.headers.get("intercept")) {
      return next.handle(req);
    } else {
      const username = this.authenticationService.username;
      const password = this.authenticationService.password;
      const authCredentials = `${username}:${password}`;
      const authHeader = `Basic ${btoa(authCredentials)}`;
      const authReq = req.clone({
        headers: req.headers.set('Authorization', authHeader)
      });
      return next.handle(authReq);
    }
  }
}
