import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaComponent } from './pessoa.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PessoaService } from 'src/app/services/pessoa.service';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { RouterModule } from '@angular/router';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PessoaComponent,
    PessoaFormComponent,
    PessoaListComponent
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PessoaService]
})
export class PessoaModule { }
