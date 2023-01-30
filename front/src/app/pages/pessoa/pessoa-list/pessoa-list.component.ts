import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/model/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss']
})
export class PessoaListComponent implements OnInit {

  title: string = 'Lista de Pessoas';
  listPessoas: Array<Pessoa> = [];
  

  constructor(
    private service: PessoaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getListPessoas();
  }

  getListPessoas(): void {
    this.service.getPessoas().subscribe((res) => {
        if (res.data) {
          this.listPessoas = res.data;
        }
    })
  }

  removePessoa(id: number) {
    this.service.excluirPessoa(id).subscribe((res) => {
      if(res) {
        this.getListPessoas();
      }
    })
  }

  goToForm(id?: number): void {
    this.router.navigate([`pessoa/form-pessoa/${id?? ''}`]);
  }

}
