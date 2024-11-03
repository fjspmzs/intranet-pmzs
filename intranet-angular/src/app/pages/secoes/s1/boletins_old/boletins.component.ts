import { Component, OnInit } from '@angular/core';
import { FileService } from './services/file.service'; // ajuste o caminho conforme necessário
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-file-viewer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Boletins</h2>
<div *ngFor="let year of years">
  <h3>{{ year }}</h3>
  <div *ngFor="let month of sortedMonths(year)">
    <h4>{{ month }}</h4>
    <ul>
      <li *ngFor="let file of getFilesByMonth(year, month)">
        <a href="#" (click)="openFile(file)">{{ file }}</a>
      </li>
    </ul>
  </div>
</div>

<iframe *ngIf="selectedFile" [src]="selectedFile" width="100%" height="600px"></iframe>
  `,
  styles: []
})
export class BoletinsComponent implements OnInit {
  files: string[] = [];
  selectedFile: string | null = null;
  years: number[] = [];


  constructor(private fileService: FileService) {

  }
  generateYears():void {
    const startYear = 2017; // Ano inicial
    const currentYear = new Date().getFullYear(); // Ano atual
    this.years = [];

    for (let year = startYear; year <= currentYear; year++) {
      this.years.push(year);
    }
  }

  ngOnInit(): void {
    this.fileService.getFiles().subscribe((data: string[]) => {
      this.files = data;
    });
   // Gera a lista de anos de 2017 até o ano atual
   this.generateYears();

  }

  openFile(fileName: string): void {
    this.selectedFile = `/arquivos/s1/boletins/${fileName}`;
  }

  sortedYears(): number[] {
    const years = Array.from(new Set(this.files.map(file => new Date(file).getFullYear())));
    return years.sort();
  }

  sortedMonths(year: number): number[] {
    const months = Array.from(new Set(this.files
      .filter(file => new Date(file).getFullYear() === year)
      .map(file => new Date(file).getMonth() + 1))); // Janeiro é 0
    return months.sort();
  }

  getFilesByMonth(year: number, month: number): string[] {
    return this.files.filter(file => {
      const fileDate = new Date(file);
      return fileDate.getFullYear() === year && fileDate.getMonth() + 1 === month;
    });
  }
}
