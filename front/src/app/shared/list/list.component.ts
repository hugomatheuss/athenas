import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Output() removePessoa: EventEmitter<number> = new EventEmitter();
  @Input() listPessoas: Array<any> = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToForm(id?: number): void {
    this.router.navigate([`pessoa/form-pessoa/${id?? ''}`]);
  }

  getCategoriaLabel(categoria: string): string {
    switch (categoria) {
      case '1':
          return 'Admin'
        case '2':
          return 'Gerente'
        case '3':
          return 'Normal'
        default:
          return 'Sem categoria';
    }
  }

  remove(id: number): void {
    this.removePessoa.emit(id);
  }

}
