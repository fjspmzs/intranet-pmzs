import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, expand, reduce } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Aniversariante } from '../aniversariante.model';

@Injectable({
  providedIn: 'root'
})

export class AniversariantesService {
  apiUrl = environment.NIVER_API;  // URL do seu Strapi

  constructor(private readonly http: HttpClient) { }

  // Método para obter todos os dados de todas as páginas
  getAllData(): Observable<Aniversariante[]> {
    return this.http.get<{ data: Aniversariante[] }>(`${this.apiUrl}`).pipe(
      map(response => response.data)
    );
  }
}
