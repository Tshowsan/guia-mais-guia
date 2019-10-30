import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-guia-cadastrar',
  templateUrl: './guia-cadastrar.page.html',
  styleUrls: ['./guia-cadastrar.page.scss'],
})
export class GuiaCadastrarPage implements OnInit {

  private loading: any;
  private user: User = {};
  
 

  constructor(
    public router: Router,
    
    public loadingController: LoadingController,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private afa: AngularFireAuth,
    private afs: AngularFirestore
   
  ) { }

  ngOnInit() {
    // this.cadastrarUsuario();
  }

  async register(){
    
    await this.presentLoading();
    try
    {
      //Cadastrando o guia e autenticação
  const newUser = await this.authService.register(this.user);
  // console.log("Usuario cadastrado com sucesso")
  //Adicionando os dados a base de dados
  //Setar campo ativo como defult false
  this.user.ativo = false;
  this.user.plantao = false;
  //Setar campo foto como uma imagem defult
  this.user.foto = "http://3.bp.blogspot.com/_Q8B72nbTfOo/TTEDpzloxqI/AAAAAAAACDg/F7Ziw7jf_4U/s1600/superman-facebook.jpg";
  await this.afs.collection('Guias').doc(newUser.user.uid).set(this.user);
  // console.log("Dados adicionais salvos com sucesso")
  
    }catch (error) {
      console.error(error);
      let message: string;
      switch(error.code){
        case 'auth/email-already-in-use':
          message = 'e-mail já cadastrado';
          break;
          case 'auth/invalid-email':
              message = 'informe um e-mail  valido';
              break;
              case 'auth/argument-error':
                message = 'informe um e-mail';
                break;
              
      }
      this.presentToast(message);
  }finally {
    this.loading.dismiss();
  }
}

 
// adicionando um spiner
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

}
