import { Component, OnInit } from '@angular/core';
import {ListaNoticias,Noticias} from '../interfaces/noticias';
import {Categorias,ListaCategorias} from '../interfaces/categorias';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  ListaNoticias=ListaNoticias;
  
  constructor() { }

  ngOnInit(): void {


  }

}
