import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BoletinsService } from './boletins.service';
import { MediaFile } from './boletins.model';

@Component({
  selector: 'br-boletins',
  templateUrl: './boletins.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
})
export class BoletinsComponent implements OnInit {
  pdfFilesByMonth: { [yearMonth: string]: MediaFile[] } = {};
  currentYear: number = new Date().getFullYear(); // Ano atual
  anoAtual = this.currentYear;
  iframeSrc: SafeResourceUrl;
  baseUrl: string = 'http://localhost:1337';

  constructor(private boletinsService: BoletinsService, private sanitizer: DomSanitizer) {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(''); // Inicializa com um valor seguro
  }

  ngOnInit(): void {
    this.boletinsService.getMediaFiles().subscribe((files: MediaFile[]) => {
      console.log(files); // Debug para ver o conteúdo do array
      const filteredFiles = files.filter((file: MediaFile ) =>
        file.mime.includes('pdf') && file.name.includes('boletim_interno') && !file.name.includes('ao'));

      this.pdfFilesByMonth = this.organizeFilesByMonth(filteredFiles);
    });
  }

  organizeFilesByMonth(files: MediaFile[]): { [yearMonth: string]: MediaFile[] } {
    return files.reduce((acc: { [yearMonth: string]: MediaFile[] }, file: MediaFile) => {
      const dateMatch = file.name.match(/\d{4}-\d{2}/); // Extrai ano e mês
      if (dateMatch) {
        const yearMonth = dateMatch[0];
        if (!acc[yearMonth]) {
          acc[yearMonth] = [];
        }
        acc[yearMonth].push(file);
      }
      return acc;
    }, {});
  }

  // Função para carregar a lista de arquivos no iframe
  setIframeSrc(file: MediaFile) {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.getFileUrl(file));
    console.log(`Arquivo selecionado: ${file.name}`); // Adiciona um log para verificar se está sendo chamado
  }

  getFileUrl(file: MediaFile): string {
    return `http://localhost:1337${file.url}`;
  }

  // Função para navegar para o ano anterior
  previousYear(): void {
    this.currentYear--;
  }

  // Função para navegar para o próximo ano
  nextYear(): void {
    this.currentYear++;
  }

  formatFileName(name: string): string {
    return name.replace(/_/g, ' ').replace(/boletim_interno/i, '').trim();
  }

  getMonthName(monthNumber: number): string {
    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return monthNames[monthNumber - 1];
  }

  getMonthFromKey(key: string): number {
    return parseInt(key.slice(5), 10);
  }

  handleClick(file: MediaFile) {
    console.log(`Clique registrado: ${file.name}`);
    this.setIframeSrc(file);
  }

}
