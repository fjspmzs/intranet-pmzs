import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PessoalService, Alteracao, MediaFile } from './pessoal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pessoal',
  templateUrl: './pessoal.component.html',
  styleUrls: ['./pessoal.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PessoalComponent implements OnInit {
  alteracoes: Alteracao[] = [];
  filteredAlteracoes: Alteracao[] = [];
  iframeSrc: SafeResourceUrl | null = null;
  currentYear: number = new Date().getFullYear(); // Ano atual
  anoAtual: number = new Date().getFullYear();
  selectedYear: number = new Date().getFullYear(); // Ano atual como padrão
  selectedSemester: number = 1; // Semestre 1 como padrão (1 ou 2)
  pdfFilesBySemester: { [key: string]: { [group: string]: MediaFile[] } } = {};

  constructor(private pessoalService: PessoalService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.pessoalService.getAlteracoes().subscribe({
      next: (alteracoes: Alteracao[]) => {
        this.alteracoes = alteracoes;
        this.organizeFilesBySemester();
      },
      error: (err) => {
        console.error('Erro ao buscar alterações:', err);
      }
    });
  }

  organizeFilesBySemester() {
    this.pdfFilesBySemester = {};
    this.alteracoes.forEach(alteracao => {
      alteracao.alteracoespdf.forEach(file => {
        const year = this.extractYearFromFilename(file.name);
        const semester = this.extractSemesterFromFilename(file.name);
        const group = this.extractGroupFromFilename(file.name);
        const key = `${year}-${semester}`;

        // Inicializa as propriedades se necessário
        this.pdfFilesBySemester[key] = this.pdfFilesBySemester[key] || {};
        this.pdfFilesBySemester[key][group] = this.pdfFilesBySemester[key][group] || [];

        // Adiciona o arquivo ao grupo
        this.pdfFilesBySemester[key][group].push(file);
      });
    });
  }

  extractGroupFromFilename(fileName: string): string {
    if (fileName.includes('sd') || fileName.includes('cb')) {
      return 'Cb e Sd';
    } else if (fileName.includes('st') || fileName.includes('sgt')) {
      return 'SubTen e Sgt';
    } else if (fileName.includes('cel') || fileName.includes('tc') || fileName.includes('maj') || fileName.includes('cap') || fileName.includes('ten') || fileName.includes('asp')) {
      return 'Oficiais';
    } else if (fileName.includes('sc')) {
      return 'FunCiv';
    } else {
      return 'Outros';
    }
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
  extractYearFromFilename(filename: string): number {
    return parseInt(filename.split('_')[0].split('-')[0], 10);
  }

  extractSemesterFromFilename(filename: string): number {
    const month = parseInt(filename.split('_')[0].split('-')[1], 10);
    return month < 7 ? 1 : 2; // 1º semestre: Janeiro a Junho, 2º semestre: Julho a Dezembro
  }

  filterAlteracoes(): void {
    const startDate = this.getStartDate(this.selectedYear, this.selectedSemester);
    const endDate = this.getEndDate(this.selectedYear, this.selectedSemester);

    this.filteredAlteracoes = this.alteracoes.filter(alteracao => {
      return alteracao.alteracoespdf.some(pdf => {
        const pdfDate = this.extractDateFromFilename(pdf.name);
        return pdfDate >= startDate && pdfDate <= endDate;
      });
    });
  }

  getStartDate(year: number, semester: number): Date {
    return semester === 1 ? new Date(year, 0, 1) : new Date(year, 6, 1); // Janeiro ou Julho
  }

  getEndDate(year: number, semester: number): Date {
    return semester === 1 ? new Date(year, 5, 30) : new Date(year, 11, 31); // Junho ou Dezembro
  }

  formatFileName(fileName: string): string {
    const rankMap: { [key: string]: string } = {
      sgt: 'Sgt',
      sd: 'Sd',
      st: 'SubTen',
      cel: 'Cel',
      maj: 'Maj',
      tc: 'TenCel',
      cap: 'Cap',
      ten: 'Ten',
      cb: 'Cb',
      asp: 'Asp',
      sc: 'FunCiv'
    };

    const parts = fileName.split('_');
    const rankAbbreviation = parts[2].toLowerCase(); // Ex: '2sgt', 'sd', 'st'
    const name = parts.slice(3).join(' ').replace('.pdf', ''); // Ex: 'magalhaes'

    let rank = '';
    if (rankAbbreviation.startsWith('2')) {
      rank = '2º ' + rankMap[rankAbbreviation.slice(1)];
    } else if (rankAbbreviation.startsWith('3')) {
      rank = '3º ' + rankMap[rankAbbreviation.slice(1)];
    } else if (rankAbbreviation.startsWith('1')) {
      rank = '1º ' + rankMap[rankAbbreviation.slice(1)];
    } else {
      rank = rankMap[rankAbbreviation];
    }

    return rank + ' ' + name.charAt(0).toUpperCase() + name.slice(1);
  }


  convertRankToOrdinal(rank: string): string {
    // Converte número ordinal para string
    switch (rank) {
      case '1':
        return '1º Sgt';
      case '2':
        return '2º Sgt';
      case '3':
        return '3º Sgt';
      // Adicione mais casos conforme necessário
      default:
        return rank; // Retorna o próprio valor se não houver conversão
    }
  }

  extractDateFromFilename(filename: string): Date {
    const dateString = filename.split('_')[0]; // Extrai a parte da data do nome do arquivo
    return new Date(dateString);
  }

  setIframeSrc(file: MediaFile) {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`http://localhost:1337${file.url}`);
  }

  onYearChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement; // Casting para HTMLSelectElement
    this.selectedYear = +selectElement.value; // Converte para número
    this.filterAlteracoes();
  }

  onSemesterChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement; // Casting para HTMLSelectElement
    this.selectedSemester = +selectElement.value; // Converte para número
    this.filterAlteracoes();
  }
  removeFirst22Chars(fileName: string): string {

    return fileName;//.substring(22).replace('_', " ");   Ou fileName.slice(22);
  }

}
