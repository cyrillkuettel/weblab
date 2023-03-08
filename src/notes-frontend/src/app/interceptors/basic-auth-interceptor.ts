import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthenticationService} from "../auth.service";
import {Injectable} from "@angular/core";


@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.headers.get("skip_interceptor")) {
      return next.handle(req);
    }

    const u = this.authenticationService.username;
    const p = this.authenticationService.password;
    console.log(u);

    const authCredentials = `${u}:${p}`;
    console.log("interceptor");
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
