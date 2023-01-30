import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.scss']
})
export class PessoaFormComponent implements OnInit {

  title: string = '';
  form: FormGroup;
  private id?: number;
  private isEditar: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: PessoaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.form = this.fb.group({
      id: [''],
      nome: ['', Validators.required], 
      email: ['', Validators.required], 
      categoria: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.title = 'Adicionar Pessoa';
    this.activatedRoute.params.subscribe(params => {
      if(params['id']) {
        this.id = params['id'];
        this.isEditar = true;
        this.title = 'Editar Pessoa';
        this.getPessoa();
      }
    });
  }

  getPessoa() {
    if(this.id) {
      this.service.getPessoa(this.id).subscribe((res) => {
        if(res.data) {
          delete res.created_at;
          delete res.updated_at;
          this.form.setValue(res.data);
        }
      })
    }
  }
  

  goBack(): void {
    this.location.back();
  }

  salvaPessoa(): void {
    if(this.form.valid) {
      if(this.isEditar) {
        this.service.editarPessoa(this.form.value).subscribe((res) => {
          if(res) {
            this.router.navigateByUrl('/pessoa');
          }
        })
      } else {
        this.service.salvarPessoa(this.form.value).subscribe((res) => {
          if(res) {
            this.router.navigateByUrl('/pessoa');
          }
        })
      }
    }
  }

}
