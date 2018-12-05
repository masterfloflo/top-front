import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollegueService } from '../services/collegue.service';
import { Collegue } from '../models';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  collegue:Collegue

  pseudo: string;
  constructor(private route:ActivatedRoute, private cs:CollegueService) { 
    this.pseudo = route.snapshot.paramMap.get("pseudo")
    
    cs.chercherParPseudo(this.pseudo)
    .subscribe(col => this.collegue = col)
  }

  ngOnInit() {
  }
}
