import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  pseudo: string;
  constructor(private route:ActivatedRoute, private router: Router) { 
    this.pseudo = route.snapshot.paramMap.get("pseudo")
  }

  ngOnInit() {
  }
changerPage() {
  this.router.navigate(["/"+ this.pseudo, {pseudo: "norbert"}])
}

}
