import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaComponent } from './pessoa.component';

const routes: Routes = [
  {
    path: '',
    component: PessoaComponent,
    children: [
      {
        path: '',
        component: PessoaListComponent
      },
      {
        path: 'form-pessoa',
        component: PessoaFormComponent
      },
      {
        path: 'form-pessoa/:id',
        component: PessoaFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
