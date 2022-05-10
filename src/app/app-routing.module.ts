import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component'; /* (2) após a inclusão da rota, o componente é importado */

// Rota dos componentes em Angular é um objeto!
/*array (listagem) de rotas para inclusão dos componentes*/
const routes: Routes = [ //toda vez que um novo componente for criado, deve incluir na rota:

    {path:'', redirectTo: 'login', pathMatch: 'full'}, /* toda vez que o endereço for "vazio" ex. localhost:4200 (end sem "/") será direc. a tela login */
    {path:'login', component: LoginComponent}, /* (1) atributo dos objetos: path é a prop. que a rota a deve ser inclusa + component: nome atribuido no app-nomecomponente */
    {path:'cadastrar', component: CadastrarComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
