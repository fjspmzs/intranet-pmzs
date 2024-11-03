import {
  CommonModule,
  DatePipe,
  formatDate,
  registerLocaleData,
} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { Component, OnInit } from '@angular/core';
import { AniversariantesService } from './services/aniversariantes.service';
import { Aniversariante } from './aniversariante.model';
import { format, isSameMonth, compareAsc } from 'date-fns';

registerLocaleData(localePt);

@Component({
  selector: 'br-aniversariantes',
  templateUrl: './aniversariantes.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./aniversariantes.component.scss'],
  providers: [DatePipe],
})
export class AniversariantesComponent implements OnInit {
  data: Aniversariante[] = [];
  currentMonth: string;
  zoomedImage: string = '';

  constructor(
    private aniversariantesService: AniversariantesService,
    private datePipe: DatePipe
  ) {
    this.currentMonth =
      this.datePipe.transform(new Date(), 'MMMM', undefined, 'pt-BR') || '';
  }

  ngOnInit(): void {
    //this.fetchData();
    this.loadAniversariantes();
  }

  loadAniversariantes(): void {
    const currentMonth = new Date().getMonth();
    this.aniversariantesService.getAllData().subscribe((data) => {
      //console.log("Todos os dados recebidos:", data);  // Verifica todos os dados antes do filtro

      this.data = (Array.isArray(data) ? data : [])
        .filter((item: any) => {
          const aniversario = new Date(item.attributes['data_aniversario']);
          //console.log("Aniversário:", aniversario, "Mês:", aniversario.getMonth(), "Mês atual:", currentMonth);

          return aniversario.getMonth() === currentMonth;  // Filtra para o mês atual
        })
        .sort((a, b) => {
          const dateA = new Date(a.attributes['data_aniversario']);
          const dateB = new Date(b.attributes['data_aniversario']);
          return dateA.getTime() - dateB.getTime();  // Ordena pela data mais próxima
        });

      //console.log('Aniversariantes do mês atual:', this.data);
    });
  }


  zoomImage(imageUrl: string): void {
    console.log(imageUrl);
    this.zoomedImage = imageUrl;

    // Seleciona o modal pelo ID
    const modalElement = document.querySelector('#zoom-Modal') as HTMLElement | null;

    if (modalElement) {
      const modalBody = modalElement.querySelector('.br-modal-body') as HTMLElement | null;

      if (modalBody) {
        // Injeta a imagem na área do modal
        modalBody.innerHTML = `<img src="${this.zoomedImage}" alt="Zoomed Image" style="width: 75%; height: auto;">`;

        // Exibe o modal
        modalElement.classList.add('show');
        modalElement.style.display = 'block';
        modalElement.style.opacity = '1';
      } else {
        console.error("Elemento '.br-modal-body' não encontrado.");
      }
    } else {
      console.error("Elemento '#zoom-Modal' não encontrado.");
    }
  }


  closeModal(): void {
    const modalElement = document.querySelector('#zoom-Modal') as HTMLElement | null;

    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.style.display = 'none';
      modalElement.style.opacity = '0';
    }
  }

  // Verifica se a data de aniversário é hoje
  isBirthdayToday(birthdate: string): boolean {
    const today = new Date();
    const birthDate = new Date(birthdate);

    return (
      today.getUTCDate() === birthDate.getUTCDate() &&
      today.getUTCMonth() === birthDate.getUTCMonth()
    );
  }
}
