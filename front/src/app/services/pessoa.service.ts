import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pessoa } from '../model/pessoa';
import { PessoasMock } from '../static/pessoa-mock';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
    providedIn: 'root'
})
export class PessoaService {
    private base_url = 'http://localhost:8000/api';
    private options: any;

    constructor(public http: HttpClient) {
        const token = `${StorageUtil.get('token_type')} ${StorageUtil.get('token')}`
        this.options = {
            headers: new HttpHeaders().set('Authorization', token)
        }
    }

    getPessoa(id: number): Observable<any> {
        return this.http.get<{ data: Pessoa}>(`${this.base_url}/pessoas/${id}`, this.options);
    }

    getPessoas(): Observable<any> {
        return this.http.get<{data: Array<Pessoa>}>(`${this.base_url}/pessoas`, this.options);
    }

    salvarPessoa(pessoa: Pessoa) {
        return this.http.post<boolean>(`${this.base_url}/pessoas`, pessoa, this.options);
    }

    editarPessoa(pessoa: Pessoa) {
        return this.http.put<boolean>(`${this.base_url}/pessoas/${pessoa.id}`, pessoa, this.options);
    }

    excluirPessoa(id: number) {
        return this.http.delete<boolean>(`${this.base_url}/pessoas/${id}`, this.options);
    }

}