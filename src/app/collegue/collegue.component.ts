import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';
import { Avis } from '../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']

})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue
  
  constructor() { }

  ngOnInit() {
  }


  notation(eventAvis: Avis) {
    console.log(this.collegue.score)

    if (eventAvis == Avis.AIMER) {
      this.collegue.score += 100;
    }
    else {
      this.collegue.score -= 100
    }
  }


    tropDamour() {
      return this.collegue.score < 1000
    }
  
  
    tropDeHaine() {
      return this.collegue.score > -1000
    }
    
  }
  


