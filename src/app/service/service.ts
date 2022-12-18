import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../model/token.model';

@Injectable({
    providedIn: 'root'
})
export class UploadFileService {

    private baseUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    upload(formData: any): Observable<any> {
        const file = formData.get('file') as File;
        const url = this.baseUrl + `/upload?file=${file.name}`;
        return this.http.post(url, formData, { responseType: 'text' });
    }

    login(formData: any): Observable<Token> {
        const file = formData.get('file') as File;
        const url = this.baseUrl + `/login?file=${file.name}`;
        return this.http.post<Token>(url, formData);
    }

    hello(): Observable<any> {
        let token = sessionStorage.getItem('token');
        const url = this.baseUrl + `/hello`;
        return this.http.get(url, { responseType: 'text' });
    }

}