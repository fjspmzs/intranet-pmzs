import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AditamentosService } from './aditamentos.service';
import { CommonModule } from '@angular/common';
import { MediaFile } from './aditamentos.model';

@Component({
  selector: 'br-aditamentos',
  templateUrl: './aditamentos.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
})
export class AditamentosComponent implements OnInit {
  pdfFilesByMonth: { [yearMonth: string]: MediaFile[] } = {};
  currentYear: number = new Date().getFullYear();
  anoAtual = this.currentYear;
  iframeSrc: SafeResourceUrl;
  baseUrl: string = 'http://192.168.0.218:1337';;

  constructor(private sanitizer: DomSanitizer, private aditamentosService: AditamentosService) {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(''); // Inicializa com um valor seguro
  }

  ngOnInit(): void {
    this.aditamentosService.getMediaFiles().subscribe((files: MediaFile[]) => {
      console.log(files); // Debug para ver o conteúdo do array
      const filteredFiles = files.filter((file: MediaFile ) =>
        file.mime.includes('pdf') && file.name.includes('aditamento'));
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
    return name.replace(/_/g, ' ').replace(/aditamento_ao_boletim_interno/i, '').trim();
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
