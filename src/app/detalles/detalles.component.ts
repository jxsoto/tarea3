import { Component, OnInit } from '@angular/core';
import {ListaNoticias,Noticias} from '../interfaces/noticias';
import {ActivatedRoute,Route} from '@angular/router';
import {Categorias,ListaCategorias} from '../interfaces/categorias';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  ListaNoticias=ListaNoticias;
  id:number=0;
  Noticia:any;
  Categoria:any;

  constructor(private ruta:ActivatedRoute) { 

    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"];
    })
  }

  ngOnInit(): void {

    this.Noticia=ListaNoticias.find(objeto=>objeto.id==this.id);
    this.Categoria=ListaCategorias.find(objeto=>objeto.id==this.Noticia.idCategoria);
  }

}
