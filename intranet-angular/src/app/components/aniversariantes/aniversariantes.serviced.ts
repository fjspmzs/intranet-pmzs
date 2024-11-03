import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, expand, reduce } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Aniversariante } from './aniversariante.model';


export interface ApiResponse {
  data: Aniversariante[];
}

@Injectable({
  providedIn: 'root'
})

export class AniversariantesService {
  apiUrl = environment.NIVER_API;  // URL do seu Strapi

  constructor(private http: HttpClient) { }

  // Método para obter todos os dados de todas as páginas
  getAllData(): Observable<Aniversariante[]> {
    const currentMonth = new Date().getMonth() + 1; // Mês atual (0-11, por isso +1)
    const currentYear = new Date().getFullYear(); // Ano atual

    return this.http.get<ApiResponse>(this.apiUrl).pipe(
        map(response => {
            // Filtrando aniversários do mês atual
            return response.data.filter(item => {
                const aniversario = new Date(item.attributes.data_aniversario);
                return aniversario.getMonth() + 1 === currentMonth && aniversario.getFullYear() === currentYear;
            }).map(item => ({
                id: item.id,
                attributes: {
                    nome: item.attributes.nome,
                    data_aniversario: item.attributes.data_aniversario,
                    createdAt: item.attributes.createdAt,
                    updatedAt: item.attributes.updatedAt,
                    publishedAt: item.attributes.publishedAt,
                    pgrad: item.attributes.pgrad,
                    firma: item.attributes.firma,
                    fotodoani: {
                        data: item.attributes.fotodoani.data.attributes.url
                    }
                }
            }));
        })
    );
}
}
