import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alterar-imagem',
  templateUrl: './alterar-imagem.page.html',
  styleUrls: ['./alterar-imagem.page.scss'],
})
export class AlterarImagemPage implements OnInit {

  profile = 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg'

  constructor() { }

  ngOnInit() {
  }

}
