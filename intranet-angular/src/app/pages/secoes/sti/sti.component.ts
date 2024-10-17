import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { MarkdownModule } from 'ngx-markdown';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'br-sti',
  standalone: true,
  imports: [MarkdownModule, RouterLink],
  template: `
  <h2><strong>Seção de Tecnologia da Informação</strong></h2>
  <h4><strong>Ramal:</strong> 5718</h4>
  <p><a routerLink="/sti/chamado"><strong>Abrir chamado (Suporte)</strong><i class="fa fa-link"></i> </a></p>
  <div class="br-divider my-6"></div>
  <a href="https://sti.9bcomge.eb.mil.br/" target="_blank"><h2 class="rounder-lg border-solid-md	 bg-blue-70 text-pure-0">Dashboard <i class="fa fa-link"></i></h2></a>
<div class="br-table" title="Sistemas STI">
    <div class="table-header">
      <div class="top-bar">
        <div class="table-title text-bold">Sistemas STI</div>
        <div class="actions-trigger text-nowrap">
          <div class="br-list" id="target01-406" role="menu" aria-labelledby="button-dropdown-density" hidden="hidden">
          </div>
        </div>
      </div>
    </div>
    <table><colgroup span="3"></colgroup>
      <thead>
        <tr>
          <th class="border-bottom" scope="col"><strong>Assunto</strong></th>
          <th class="border-bottom border-left" scope="col"><strong>Link</strong></th>
          <th class="border-bottom border-left" colspan="3" scope="colgroup"><strong>Descrição</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <th class="border-right" rowspan="6" scope="rowgroup"><i class="fa fa-headset"></i>Chamados externos</th>
        <tr>
            <td title="link"><a href="https://cop.6cta.eb.mil.br" target="_blank"><i class="fa fa-headset"></i> OTOBO 6º CTA</a></td>
            <td title="descricao" colspan="3">Sistema de chamados do 6º CTA</td>
        </tr>
        <tr>
            <td title="link"><a href="https://ldap.6cta.eb.mil.br" target="_blank">LDAP 6º CTA</a></td>
            <td title="descricao" colspan="3">Controle de acesso (Internet avançada e VPN)</td>
        </tr>
        <tr>
            <td title="link"><a href="http://atendimento.badmapcmo.eb.mil.br/dti/" target="_blank">GLPI B Adm/ Ap CMO</a></td>
            <td title="descricao" colspan="3">Sistema de chamados da Base de Adminsitração e Apoio do CMO</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th class="border-right" rowspan="4" scope="rowgroup"><i class="fa fa-eye"></i>Monitoramento</th>
          <td><a href="http://zabbix.9bcomge.eb.mil.br/zabbix/zabbix.php?action=map.view" target="_blank">Zabbix</a></td>
          <td colspan="3">Monitoramento da rede (Switches e Serviços)</td>
        </tr>
        <tr>
            <td><a href="http://ocs.9bcomge.eb.mil.br/ocsreports" target="_blank">OCS Inventory</a></td>
            <td colspan="3">Inventário de máquinas e ativos</td>
        </tr>
        <tr>
            <td><a href="https://ksc.6cta.eb.mil.br:8080" target="_blank">Admin Kaspersky</a></td>
            <td colspan="3">Antivírus</td>
        </tr>
        <tr>
            <td><a href="http://velocimetro.6cta.eb.mil.br/" target="_blank">Velocímetro</a></td>
            <td colspan="3">Teste de velocidade do 6º CTA</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th class="border-right" rowspan="4" scope="rowgroup"><i class="fa fa-book"></i>Base de Conhecimento</th>
          <td><a href="http://intranet2.9bcomge.eb.mil.br/mediawiki" target="_blank"><i class="fa fa-book"></i> Mediawiki</a></td>
          <td colspan="3">Antigo mediawiki</td>
        </tr>
        <tr>
            <td><a href="http://sti-docs.9bcomge.eb.mil.br" target="_blank">STI-Docs</a></td>
            <td colspan="3">Bookstack server (base de conhecimento nova)</td>
        </tr>
        <tr>
            <td><a href="http://wekan.9bcomge.eb.mil.br/b/di3Su6Cn3XTvc9iSP/sti-9o-b-com-ge" target="_blank">WeKan</a></td>
            <td colspan="3">KanBoard da STI</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th class="border-right" rowspan="5" scope="rowgroup"><i class="fa fa-box"></i>Repositórios</th>
          <tr>
            <td title="link"><a href="http://repositorio.6cta.eb.mil.br/downloads/" target="_blank">Repositório 6º CTA</a></td>
            <td title="descricao" colspan="3">Repositório do 6º CTA</td>
        </tr>
          <tr>
            <td title="link"><a href="http://repositorio.9bcomge.eb.mil.br/webdav/" target="_blank">Repositório 9º B Com GE</a></td>
            <td title="descricao" colspan="3">Repositório do 9º B Com GE</td>
        </tr>
      </tbody>
    </table>
  </div>


`,
})
export class StiComponent {
  public markdownSrc: string;

  constructor() {
    this.markdownSrc = `${environment.ASSETS_MD}/sti.md`
  }
}
