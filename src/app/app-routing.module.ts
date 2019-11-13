import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'esqueceu-senha', loadChildren: './esqueceu-senha/esqueceu-senha.module#EsqueceuSenhaPageModule' },
  { path: 'meus-dados', loadChildren: './meus-dados/meus-dados.module#MeusDadosPageModule' },
  { path: 'alterar-senha', loadChildren: './alterar-senha/alterar-senha.module#AlterarSenhaPageModule' },
  { path: 'alterar-imagem', loadChildren: './alterar-imagem/alterar-imagem.module#AlterarImagemPageModule' },
  { path: 'lista-guias', loadChildren: './lista-guias/lista-guias.module#ListaGuiasPageModule' },
  { path: 'detalhe-guia', loadChildren: './detalhe-guia/detalhe-guia.module#DetalheGuiaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
