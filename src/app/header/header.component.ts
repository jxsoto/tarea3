import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  imagen=[{"id":1,"nombre":"imagenheader","ruta":"imagen1.jpg"}];
  constructor() { }

  ngOnInit(): void {
  }

}
