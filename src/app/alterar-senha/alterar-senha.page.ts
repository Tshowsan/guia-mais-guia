import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.page.html',
  styleUrls: ['./alterar-senha.page.scss'],
})
export class AlterarSenhaPage implements OnInit {
  senha1: string;
  senha2: string;

  senhaCheck: boolean = false

  constructor() { }

  ngOnInit() {
  }

  checkarSenha(event) {
    // console.log(event.target.value)
    event.target.value = this.senha2
    if (this.senha2 == this.senha1) {
      this.senhaCheck = true
    } else {
      this.senhaCheck = false
    }
  }
}
