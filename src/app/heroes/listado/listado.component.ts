import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 })
export class ListadoComponent {

  heroes: string[] = ['Sipiderman', 'Ironman', 'Hulk', 'Thor', 'Cápitan América'];
  heroeBorrado: string = '';
  borrarHeroe(){
    this.heroeBorrado = this.heroeBorrado = this.heroes.shift() || '';

  }

}
