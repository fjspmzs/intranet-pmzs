import { Injectable, ApplicationRef, Injector, ViewContainerRef, TemplateRef, ComponentRef } from '@angular/core';
import { BRModalComponent } from '../components/brmodal/brmodal.component';

@Injectable({
  providedIn: 'root'
})
export class BrModalService {
  private modalRef: ComponentRef<BRModalComponent> | null = null; // Armazena a referência do modal

  constructor(private appRef: ApplicationRef, private injector: Injector) {}

  open(viewContainerRef: ViewContainerRef, title: string, contentTemplate: TemplateRef<any>) {
    // Verifica se já existe um modal aberto
    if (this.modalRef) {
      this.close(); // Fecha o modal existente antes de abrir um novo
    }

    // Cria o componente modal dinamicamente
    this.modalRef = viewContainerRef.createComponent(BRModalComponent);
    this.modalRef.instance.title = title;
    this.modalRef.instance.contentTemplate = contentTemplate;

    // Adiciona o modal ao DOM
    this.appRef.attachView(this.modalRef.hostView);
    const domElem = (this.modalRef.hostView as any).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }

  close() {
    if (this.modalRef) {
      this.appRef.detachView(this.modalRef.hostView);
      this.modalRef.destroy();
      this.modalRef = null;
    }
  }
}
