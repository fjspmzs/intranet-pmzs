import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profissional,Especialistas } from '../model/profissional';

@Injectable({
  providedIn: 'root',
})

export class ProfissionalService {
  private apiUrl = 'http://localhost:1337/api/profissionals'; // URL da API do Strapi
  private apiUrlE = 'http://localhost:1337/api/especialistas'; // URL da API do Strapi

  constructor(private http: HttpClient) {}

  // Buscar todos os profissionais
  getProfissionais(): Observable<Profissional[]> {
    return this.http.get<{ data: Profissional[] }>(`${this.apiUrl}?populate=*`).pipe(
      map(response => response.data)
    );
  }
  // Buscar todos os profissionais
  getEspecialistas(): Observable<Especialistas[]> {
    return this.http.get<{ data: Especialistas[] }>(`${this.apiUrlE}`).pipe(
      map(response => response.data)
    );
  }

  // Buscar um profissional específico por ID
  getProfissionalById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?populate=*&filters[id][$eq]=${id}`);
  }

  // Criar um novo profissional
  addProfissional(data: any): Observable<any> {
    console.log(data);
    return this.http.post(this.apiUrl, data );
  }

  // Atualizar um profissional existente
  updateProfissional(id: number, formData: FormData): Observable<any> {

  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
    return this.http.put(`${this.apiUrl}/${id}`,formData);
  }

  // Deletar um profissional
  deleteProfissional(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
