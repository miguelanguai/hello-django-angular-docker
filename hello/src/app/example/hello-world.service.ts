import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensor } from './sensor';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  private nombreContenedorDjango = 'localhost'

  private apiUrl = 'http://'+this.nombreContenedorDjango+':8000/api'; // URL del backend

  constructor(private http: HttpClient) {}

  getMessage(): Observable<{message: string}> {
    return this.http.get<{message: string}>(`${this.apiUrl}/mensaje/`);
  }

  getSensores(): Observable<Sensor[]> {
    return this.http.get<any>(`${this.apiUrl}/sensores/`);
  }
}
