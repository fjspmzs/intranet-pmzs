import { Component } from '@angular/core';
import { ButtonBalloonComponent } from '../../components/button-balloon/button-balloon.component';

@Component({
  selector: 'br-ciac2',
  standalone: true,
  imports: [ButtonBalloonComponent],
  templateUrl: './ciac2.component.html',
})
export class Ciac2Component {
  public items: any[] = [
    {
      icon: 'fa fa-skull',
      name: 'Caveirinha 2024',
      route: 'https://docs.google.com/spreadsheets/d/1SKLviZrpz2fojIAFo69yGRkBgbxW1GbTU7bRiIRpBwI/edit?usp=sharing',
      external: true
    },
    {
      icon: 'fa fa-phone',
      name: 'Plano de Chamada',
      route: 'https://docs.google.com/spreadsheets/d/1nlBPSK2gtu6RHQAx8qXSWH39msUcBAE7QmSp0vWtv30/edit#gid=0',
      external: true
    },
    {
      icon: 'fas fa-truck',
      name: 'Viaturas',
      route: 'https://docs.google.com/spreadsheets/d/1PKkCYEQANhFERPJNXqYyXALqsBYkHW93-mWckQQ-5h0/edit#gid=0',
      external: true
    },
    {
      icon: 'fas fa-map',
      name: 'Mapa da força',
      route: 'https://docs.google.com/spreadsheets/d/1yt6MIVoiQLQMEeM2nkqB7FTFO2-CTEMKMHool0UNqk0/edit?gid=0#gid=0',
      external: true
    },
  ]
}
