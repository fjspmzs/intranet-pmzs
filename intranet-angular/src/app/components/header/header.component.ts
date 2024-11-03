import { Component, ElementRef } from '@angular/core'

import BRHeader from '@govbr-ds/core/dist/components/header/header'
import { environment } from '../../../environments/environment'
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
  public title = 'Prefeitura Militar da Zona Sul'
  public subtitle = 'Denominação Histórica'
  public signature: string = 'Ministério da Defesa'
  instance: any // Instância do componente angular

  constructor(private brHeader: ElementRef) { }
  ngAfterViewInit() {
    this.instance = new BRHeader('.br-header', this.brHeader.nativeElement.querySelector('.br-header'))
  }

  public image = {
    src: `${environment.ASSETS_PICS}/iconpmzs.png`,
    alt: 'PMZS',
  }

  public links: any[] = [
    {
      href: 'http://intranet.cml.eb.mil.br',
      name: 'CML',
      target: '_blank',
      title: 'CML',
    },
    {
      href: 'http://intranet.1rm.eb.mil.br',
      name: '1ª RM',
      target: '_blank',
      title: '1RM',
    },
    {
      href: 'https://10.56.67.186:1003/logout?',
      name: 'Login 2º CTA',
      icon: 'fa-brands fa-safari',
      target: '_blank',
      title: 'logincta',
    },
    {
      href: 'https://suade.1rm.eb.mil.br/#/login',
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
