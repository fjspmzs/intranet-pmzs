import { Component, ElementRef } from '@angular/core'

import BRHeader from '@govbr-ds/core/dist/components/header/header'
import { environment } from '../../../environments/environment.prod'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'br-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class BrHeaderComponent {
  public title = '9º Batalhão de Comunicações e Guerra Eletrônica'
  public subtitle = 'Batalhão Major Rondon'
  public signature: string = 'Ministério da Defesa'
  instance: any // Instância do componente angular

  constructor(private brHeader: ElementRef) { }
  ngAfterViewInit() {
    this.instance = new BRHeader('.br-header', this.brHeader.nativeElement.querySelector('.br-header'))
  }

  public image = {
    src: `${environment.ASSETS_PICS}/logo9bcom2.png`,
    alt: '9º B Com GE',
  }

  public links: any[] = [
    {
      href: 'http://intranet.cmo.eb.mil.br',
      name: 'CMO',
      target: '_blank',
      title: 'CMO',
    },
    {
      href: 'http://intranet.9rm.eb.mil.br',
      name: '9ª RM',
      target: '_blank',
      title: '9RM',
    },
    {
      href: 'https://10.56.67.186:1003/logout?',
      name: 'Login 6º CTA',
      icon: 'fa-brands fa-safari',
      target: '_blank',
      title: 'logincta',
    },
    {
      href: 'https://marcacao-consulta.eb.mil.br/#/login',
      icon: 'fa-solid fa-notes-medical',
      name: 'Marcação de consulta',
      target: '_blank',
      title: 'pergaminho',
    },
    {
      href: 'http://pergaminho.eb.mil.br/',
      icon: 'fa-solid fa-book-open-reader',
      name: 'Pergaminho',
      target: '_blank',
      title: 'pergaminho',
    },
  ]


}
