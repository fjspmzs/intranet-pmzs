import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { MediaFile } from './aditamentos.model';

@Injectable({
  providedIn: 'root'
})
export class AditamentosService {
  private apiUrl = 'http://localhost:1337/api/upload/files'; // Ajuste conforme a URL do seu Strapi

  constructor(private http: HttpClient) { }

  getMediaFiles(): Observable<MediaFile[]> {
    return this.http.get<MediaFile[]>(this.apiUrl).pipe(
      map(response => {
        console.log(response); // Debug para ver a resposta
        return response; // Retorna a resposta como array de objetos
      })
    );
  }
}
