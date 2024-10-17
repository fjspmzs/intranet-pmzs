import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface FooterSection {
  title: string;
  items: { content: string; route: string; external: boolean }[];
}

@Component({
  selector: 'br-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
})
export class BrFooterComponent {

  public image = {
    src: `${environment.ASSETS_PICS}/logo_eb.png`,
    alt: 'Logo EB',
  }

  footerSections: FooterSection[] = [
    {
      title: 'Sistemas',
      items: [
        { content: 'SPED', route: 'http://sped.9bcomge.eb.mil.br', external: true },
        { content: 'SisBol', route: 'http://10.56.19.134/band/', external: true },
        { content: 'Drive', route: 'http://drive.9bcomge.eb.mil.br', external: true },
        { content: 'Zimbra', route: 'http://correio.9bcomge.eb.mil.br', external: true },
        { content: 'SGD', route: 'http://sgd.9bcomge.eb.mil.br', external: true },
      ],
    },
    {
      title: '1ª Seção',
      items: [
        { content: 'Escala', route: '/s1/servico', external: false },
      ],
    },
    {
      title: '3ª Seção',
      items: [
        { content: 'QTS CTTEP', route: 'http://10.56.19.133/arquivos/s3/6%20-%20QTS%20CTTEP/', external: true },
        { content: 'QTS IIQ e CFC', route: 'http://10.56.19.133/arquivos/s3/8%20-%20QTS%20IIQ%20e%20CFC/', external: true },
        { content: 'QTFM CTTEP', route: 'http://10.56.19.133/arquivos/s3/9%20-%20QTFM%20IIQ%20e%20CFC/', external: true },
        { content: 'QTFM IIQ e CFC', route: 'http://10.56.19.133/arquivos/s3/9%20-%20QTFM%20IIQ%20e%20CFC/', external: true },
      ],
    },
    {
      title: '4ª Seção',
      items: [
        { content: 'Pedido de combustível', route: 'http://sistemas.9bcomge.eb.mil.br/sistema/index.php/en/pedido-de-combustivel', external: true },
        { content: 'Visualizar pedidos de combustível', route: 'http://sistemas.9bcomge.eb.mil.br:3000/public/dashboard/02538f30-fcdf-4317-b793-caa041564f60', external: true },
      ],
    },
    {
      title: 'Links Úteis',
      items: [
        { content: 'Marcar consulta H Mil A CG', route: 'https://sigh.hmilacg.eb.mil.br/paciente/seg', external: true },
        { content: 'Sistemas externos', route: '/sistemas-externos', external: false },
      ],
    },
    {
      title: 'Apoio ao Usuário',
      items: [
        { content: 'Trocar senha sistemas internos', route: 'http://10.56.19.130/resetsenha/', external: true },
        { content: 'Trocar senha VPN', route: 'https://acesso.6cta.eb.mil.br/otp.html', external: true },
        { content: 'Abrir chamado STI', route: 'https://forms.gle/Mzv7aPybqydCbMj98', external: true },
      ],
    },
  ];
}
