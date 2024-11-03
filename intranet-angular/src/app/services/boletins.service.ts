import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BoletinsService {
  private apiUrl = 'http://localhost/band/boletim'; // Verifique se essa URL está correta e acessível

  constructor(private http: HttpClient) { }

  getBoletins(): Observable<string[]> {
    return this.http.get(this.apiUrl, { responseType: 'text' }).pipe(
      map(response => {
        console.log(response); // Debug para ver a resposta
        const parser = new DOMParser();
        const doc = parser.parseFromString(response, 'text/html');
        const links = doc.querySelectorAll('a');
        const pdfFiles: string[] = [];
        links.forEach(link => {
          const href = link.getAttribute('href');
          if (href && href.endsWith('.pdf')) {
            pdfFiles.push(href);
          }
        });
        return pdfFiles;
      })
    );
  }
}
