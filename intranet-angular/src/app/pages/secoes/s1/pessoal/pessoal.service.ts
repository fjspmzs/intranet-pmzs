import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface MediaFile {
  id: number;
  name: string;
  url: string;
  mime: string;
}

export interface Alteracao {
  id: number;
  documentId: string;
  titles: string;
  alteracoespdf: MediaFile[];
}

@Injectable({
  providedIn: 'root'
})
export class PessoalService {
  private apiUrl = 'http://localhost:1337/api/alteracoes?populate=*';

  constructor(private http: HttpClient) { }

  getAlteracoes(): Observable<Alteracao[]> {
    return this.http.get<{ data: Alteracao[] }>(this.apiUrl).pipe(
      map(response => response.data)
    );
  }
}
