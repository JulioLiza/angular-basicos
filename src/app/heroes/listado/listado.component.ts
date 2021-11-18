//import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent //implements OnInit 
{
  heroeeliminado:string='';
  /*constructor() { 

    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');}*/
  
heroes:string[] =['Spiderman','Ironma','Hulk','Thor','Capitan America']


 borrarHeroe():string 
{
  this.heroeeliminado=this.heroes.shift() || '';
  
  return this.heroeeliminado;

}
}
