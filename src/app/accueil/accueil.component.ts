import { Component, OnInit } from '@angular/core';
import { Collegue, Vote, Avis } from '../models';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  listeCollegue: Collegue[] = [
    new Collegue("Hervé", 0, "Seulement 2 arrêts maladies", [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`)),
     new Collegue("Billy", 0, "Seulement 30min de retard tous les matins", [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`)),
     new Collegue("Hubert-bonisseur-delabatte", 0, "J'aime me battre", [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`)),
     new Collegue("Crouton", 0, "Vieux et moche", [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`))
  ]

listeVotes: Vote[] = [
  new Vote(this.listeCollegue[0], Avis.AIMER),
  new Vote(this.listeCollegue[2], Avis.DETESTER)
]



}
