import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  url: any = 'https://jsonplaceholder.typicode.com/users'; //var url

  getValor(){
    return 1; 
  } //funcaogetvalor

  RepassarValor:boolean=true;

  RepassarValorViaFunction(){
    return "Curti";
  }

  urlUsers = "https://jsonplaceholder.typicode.com/users";

  constructor() { }

  ngOnInit(): void {
  }

}
