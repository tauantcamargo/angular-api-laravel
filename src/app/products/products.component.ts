import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import $ from 'jquery';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  produtoForm: FormGroup;

  products:any = [];
  baseurl = 'https://apsmeetupapi.herokuapp.com/api/v1/products';
  //baseurl = 'http://localhost:8000/api/v1/products';

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.produtoForm = fb.group({
      'id': 0,
      'name' : '',
      'price': '',
      'description' : ''
    });
  }

  ngOnInit() {
    this.listar();
  }

  /**
   * Lista todos os produtos.
   */
  listar () {
    this.http.get(this.baseurl)
      .subscribe(response => {
        this.products = response;
      });
  }

  /**
   * Remove um produto existente.
   */
  excluir (id) {
    this.http.delete(this.baseurl+'/'+id)
    .subscribe(response => {
      console.log(response);
      this.listar();
    }, error => {
      console.log(error);
    });
  }

  /**
   * Salva um novo produto.
   */
  salvar (produto) {
    this.http.post(this.baseurl, produto)
    .subscribe(response => {
      this.listar();
    });
  }

  /**
   * Salva um novo produto.
   */
  atualizar () {
    // TODO ...
  }

  /**
   * Visualiza um produto.
   */
  visualizar () {
    // TODO ..
  }

  /**
   * Abre o modal.
   */
  openModal (modal: string) {
    //$(modal).modal('show');
  }

}

