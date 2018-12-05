import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Collegue, Avis } from '../models';
import { HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  constructor(private _http:HttpClient) { }

  listerCollegues():Promise<Collegue[]>  {
    // récupérer la liste des collègues côté serveur
    return this._http.get(environment.backendUrl +'/collegue').toPromise()
    .then((tabColServeur:any[]) => tabColServeur.map(coco => new Collegue(coco.score, coco.pseudo, [coco.imageUrl])))
  }


  donnerUnAvis(unCollegue:Collegue, avis:Avis):Promise<Collegue>  {
    // Aimer ou Détester un collègue côté serveur
    
    return this._http.patch(environment.backendUrl +'/collegue', {"action":avis.toString}, httpOptions)
    .toPromise().then((c:Collegue) => c)   
  
    
    


  }
}

