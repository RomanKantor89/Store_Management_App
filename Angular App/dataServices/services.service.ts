import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Service } from '../classes/service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'  })
};

@Injectable({
    providedIn: 'root'
})
export class ServicesService {

    curService: Service;

    constructor(private http: HttpClient) { }

    private url: string = environment.apiLink + '/api/service';

    // Get all services
    serviceGetAll(): Observable<Service[]> {
        return this.http.get<Service[]>(this.url);
    }

    // add one service
    addService(newService: Service): Observable<any> {
        return this.http.post(this.url, newService, httpOptions);
    }

}
