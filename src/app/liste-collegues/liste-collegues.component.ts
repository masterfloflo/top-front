import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../models';
@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.css']
})
export class ListeColleguesComponent implements OnInit {


  @Input() lesCollegues:Collegue[]

  constructor() { }

  ngOnInit() {
  }


/*   Bouton rafraichir à terminer
  @Output() rafraichir = new EventEmitter<Collegue[]>()

  refresh() {
    this.rafraichir.emit(this.lesCollegues)
   }
  

  ref(refresh : Collegue {
    if (this.lesCollegues.score !== 0 ) {
      this.lesCollegues.score = 0;
    }
}
*/
}
