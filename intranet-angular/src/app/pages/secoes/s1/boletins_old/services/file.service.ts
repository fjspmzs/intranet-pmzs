import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private baseUrl = '/arquivos/s1/boletins';

  constructor(private http: HttpClient) {}

  getFiles(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl);
  }
}
