import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let token = sessionStorage.getItem('token');
        
            request = request.clone({
                setHeaders: { 
                    'Access-Control-Allow-Origin': '*',
                    'Host': 'http://localhost:8080',
                    authorization: `Bearer ${token}`
                }
            });
        

        return next.handle(request);
    }
}

