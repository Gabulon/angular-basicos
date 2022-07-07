import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{
  nombre:String='Ironman';
  edad:number=33;

  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }
  obtieneNombre():string{
    return `${this.nombre}-${this.edad}`;
  }

  cambiarNombre():void{
     this.nombre="spiderman";
  }

  cambiarEdad():void{
    this.edad=30;
 }
}