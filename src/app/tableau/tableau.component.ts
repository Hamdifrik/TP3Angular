import { Component } from '@angular/core';


@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent {

  style="italic";
  tab= [15, 46, 0, 89, 80]; 
   styleIsItalic = true;

  position(indice: number) {
    alert(`L'élément est à la position ${indice + 1}`);
  }

  colorier(nb: number): string {
    return nb % 3 === 0 ? 'magenta' : 'bleu';
  }

  toggleStyle() {
    this.styleIsItalic = !this.styleIsItalic;
  }

}
