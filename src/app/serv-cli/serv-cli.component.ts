import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-serv-cli',
  templateUrl: './serv-cli.component.html',
  styleUrls: ['./serv-cli.component.scss']
})
export class ServCliComponent implements OnInit {

  formulario:FormGroup;
  activar:boolean=false;

  constructor(public Form:FormBuilder) {
 
    this.formulario=this.Form.group({

      nombre: ["", Validators.required],
      numero: ["", Validators.required],
      correo: ["", [Validators.required,Validators.email]],
      mensaje: ["", Validators.required]

    })


   }

  ngOnInit(): void {
  }

  validacion(){

    this.activar=true;
  }

}
