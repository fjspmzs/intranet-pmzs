import { Injectable } from '@angular/core';

interface Link {
  href: string;
  title: string;
  target?: string;
  icon: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  mainLinks: Link[] = [
    { href: 'http://sistemas.9bcomge.eb.mil.br', title: 'Sistema Interno', target: '_blank', icon: 'fa fa-id-card' },
    { href: 'http://sped.9bcomge.eb.mil.br', title: 'SPED', target: '_blank', icon: 'fa fa-file-lines' },
    { href: 'http://10.56.19.131', title: 'SPED 2.9', target: '_blank', icon: 'fa fa-file-lines' },
    { href: 'http://10.56.19.134/band/', title: 'SisBol', target: '_blank', icon: 'fa fa-book' },
    { href: '/s1/boletins', title: 'Boletins', icon: 'fa fa-magnifying-glass' },
    { href: 'http://drive.9bcomge.eb.mil.br/index.php/login', title: 'Drive', target: '_blank', icon: 'fa fa-cloud' },
    { href: 'https://correio.9bcomge.eb.mil.br/', title: 'Zimbra', icon: 'fa fa-envelope', target: '_blank' },
    { href: 'https://sgd.eb.mil.br/pages/login.faces#app', title: 'SGD', target: '_blank', icon: 'fa fa-chart-line' },
  ];

  systems: Link[] = [
    { href: 'http://sistemas.9bcomge.eb.mil.br', title: 'Sistema Interno', target: '_blank', icon: 'fa fa-id-card' },
    { href: 'http://sped.9bcomge.eb.mil.br', title: 'SPED', target: '_blank', icon: 'fa fa-file-lines' },
    { href: 'http://10.56.19.134/band/', title: 'SisBol', target: '_blank', icon: 'fa fa-book' },
    { href: '/s1/boletins', title: 'Boletins', target: '_self', icon: 'fa fa-magnifying-glass' },
    { href: 'https://cloud.9bcomge.eb.mil.br/index.php/login', title: 'Cloud', target: '_blank', icon: 'fa fa-cloud' },
    { href: 'http://drive.9bcomge.eb.mil.br/index.php/login', title: 'Drive', target: '_blank', icon: 'fa fa-cloud' },
    { href: 'http://wekan.9bcomge.eb.mil.br', title: 'WeKan', target: '_blank', icon: 'fa fa-list' },
    { href: 'https://correio.9bcomge.eb.mil.br/', title: 'Zimbra', icon: 'fa fa-envelope', target: '_blank' },
    { href: 'https://sgd.eb.mil.br/pages/login.faces#app', title: 'SGD', target: '_blank', icon: 'fa fa-chart-line' },
    { href: 'https://pdf.9bcomge.eb.mil.br/', title: 'PDF Editor', target: '_blank', icon: 'fa fa-file-pdf' },
  ];

  intranets: Link[] = [
    { href: 'http://intranet.cmo.eb.mil.br', title: 'CMO', target: '_blank', icon: '' },
    { href: 'http://intranet.9rm.eb.mil.br', title: '9ª RM', target: '_blank', icon: '' },
    { href: 'http://intranet.badmapcmo.eb.mil.br', title: 'B Adm Ap/CMO', target: '_blank', icon: '' },
    { href: 'http://intranet.6cta.eb.mil.br', title: '6º CTA', target: '_blank', icon: '' },
    { href: 'http://intranet.9bpe.eb.mil.br', title: '9º BPE', target: '_blank', icon: '' },
    { href: 'http://www.hmilacg.eb.mil.br/', title: 'HMILACG', target: '_blank', icon: '' },
    { href: 'http://www.cmcg.eb.mil.br/', title: 'CMCG', target: '_blank', icon: '' }
  ];

  usefulLinks: Link[] = [
    {
      href: 'http://sislogmnt.eb.mil.br',
      title: ' SisLogMnt', target: '_blank',
      icon: 'fa-solid fa-screwdriver-wrench',
      description: 'Sistema Logística de Manutenção'
    },
    {
      href: 'http://10.56.19.131',
      title: 'SPED 2.9', target: '_blank',
      icon: 'fa fa-file-lines',
      description: 'Sistema de Protocolo do Exército'
    },
    {
      href: 'http://sistemas.badmapcmo.eb.mil.br/sisRancho/index.php?pasta=home&pagina=inicio',
      title: 'Arranchamento CMO',
      target: '_blank',
      icon: 'fa fa-utensils',
      description: 'Sistema de Arranchamento do CMO (B Adm Ap/CMO)'
    },
    {
      href: 'http://www.badmqgex.eb.mil.br/calculo-de-tempo-de-servico',
      title: 'Cálculo de Tempo de Sv',
      target: '_blank',
      icon: 'fa fa-calculator',
      description: 'Calculadora de Tempo de Serviço do EGGCF'
    },
    {
      href: 'https://www.redcea.com/',
      title: 'Conferência dos Exércitos Americanos (CEA)',
      target: '_blank',
      icon: '',
      description: 'Conferência dos Exércitos Americanos (CEA)'
    },
    {
      href: 'https://webmail.eb.mil.br/',
      title: 'Correio - Webmail',
      target: '_blank',
      icon: 'far fa-envelope',
      description: 'Webmail'
    },
    {
      href: 'https://ebmail.eb.mil.br',
      title: 'EB Mail',
      target: '_blank',
      icon: 'fa fa-envelope',
      description: 'EB-Mail'
    },
    {
      href: 'http://viatura.9rm.eb.mil.br/',
      title: 'FAEL',
      target: '_blank',
      icon: '',
      description: 'Viaturas 9RM'
    },
    {
      href: 'http://10.56.120.7/sca/',
      title: 'SCA',
      target: '_blank',
      icon: 'fa fa-gas-pump',
      description: 'Sistema para Controle de Abastecimento (Comando do 9º Grupamento Logístico)'
    },
    {
      href: 'http://intranet.cmo.eb.mil.br/index.php/cancao-do-sd-pantaneiro',
      title: 'Canção do Soldado Pantaneiro',
      target: '_blank',
      icon: 'fa fa-music',
      description: 'Canção do soldado pantaneiro e letra (Intranet CMO)'
    },
    {
      href: 'http://intranet.dpgo.dgp.eb.mil.br/index.php/movimentacao/distancias-entre-cidades',
      title: 'DISTÂNCIAS ENTRE CIDADES',
      target: '_blank',
      icon: 'fa fa-location',
      description: 'Distâncias entre cidades (DPGO)'
    },
    {
      href: 'http://velocimetro.6cta.eb.mil.br/',
      title: 'Velocímetro EBNet+',
      target: '_blank',
      icon: 'fa fa-gauge',
      description: 'Velocímetro EBNet'
    },
    {
      href: 'http://www.opus.eb.mil.br/cobra-grp-web/pages/privado/index.jsf',
      title: 'OPUS',
      target: '_blank',
      icon: '',
      description: 'OPUS'
    },
    {
      href: 'http://www.eb.mil.br/web/ouvidoria/sistema_de_ouvidoria',
      title: 'Ouvidoria do EB',
      target: '_blank',
      icon: 'fa fa-phone',
      description: 'Ouvidoria do EB'
    },
    {
      href: 'https://webmail.redecmdo.eb.mil.br/',
      title: 'Rede Cmdo',
      target: '_blank',
      icon: '',
      description: 'Webmail rede Cmdo'
    },
    {
      href: 'http://sadla.coter.eb.mil.br/index.php/login',
      title: 'SADLA',
      target: '_blank',
      icon: '',
      description: 'SADLA Coter'
    },
    {
      href: 'http://www.sgl.eb.mil.br/sgl/',
      title: 'SGL',
      target: '_blank',
      icon: ''
    },
    {
      href: 'https://sso.eb.mil.br/cas/login',
      title: 'SIGELOG',
      target: '_blank',
      icon: '',
      description: 'SSO SIGELOG'
    },
    {
      href: 'http://siscofisweb.eb.mil.br/',
      title: 'Siscofis WEB',
      target: '_blank',
      icon: '',
      description: 'SISCOFIS Web'
    },
    {
      href: 'http://10.166.71.64/siscol_2014/control_login/control_login.php',
      title: 'SISCOL',
      target: '_blank',
      icon: '',
      description: 'SISCOL'
    }
  ];

  userHelp: Link[] = [
    { href: 'https://ldap.9bcomge.eb.mil.br/resetsenha/', title: 'Trocar senha Sistemas Internos', target: '_blank', icon: 'fa fa-key' },
    { href: 'https://acesso.6cta.eb.mil.br/otp.html', title: 'Trocar senha VPN', target: '_blank', icon: 'fa fa-key' },
    { href: '/sti/chamado', title: 'Abrir chamado simplificado - STI', icon: 'fa fa-headset' },
    { href: 'http://docs.9bcomge.eb.mil.br/', title: 'Como acessar VPN', target: '_blank', icon: 'fa fa-question' },
    { href: 'http://docs.9bcomge.eb.mil.br/', title: 'Como acessar Internet', target: '_blank', icon: 'fa fa-question' },
    { href: 'http://intranet.dct.eb.mil.br/legislacao-tic', title: 'Legislação de TIC', target: '_blank', icon: 'fa fa-book' },
    { href: 'https://docs.google.com/forms/d/e/1FAIpQLSeA_68qpFhRZbXk9Csh1FncU5KWn6pFsJs-5wXrWOCTDQaizg/viewform', title: 'Abrir chamado P.O', target: '_blank', icon: 'fa fa-hammer' },
  ];

  constructor() { }
}
