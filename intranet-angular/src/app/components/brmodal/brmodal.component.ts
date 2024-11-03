import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrModalService } from '../../services/brmodal.service';

@Component({
  selector: 'br-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brmodal.component.html',
  styleUrls: ['./brmodal.component.scss']
})
export class BRModalComponent {
  @Input() title: string = 'Título do Modal';  // Título do modal passado dinamicamente
  @Input() contentTemplate?: TemplateRef<any>; // Conteúdo passado via template

  constructor(private brModalService: BrModalService) {}

  close(): void {
    this.brModalService.close(); // Usa o serviço diretamente para fechar o modal
  }
}
