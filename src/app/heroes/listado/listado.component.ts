import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent  {
heroes:String[]=['spiderman','ironMan','Hulk','Aquaman','Capitan America'];
heroeBorrado:String="";

borrarHeroe(){
  this.heroeBorrado=this.heroes.shift() || '';
}
}
