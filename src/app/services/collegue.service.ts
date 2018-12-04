import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Collegue, Avis } from '../models';

const URL_BACKEND = environment.backendUrl;
@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  constructor(private _http:HttpClient) { }

  listerCollegues():Promise<Collegue[]>  {
    // récupérer la liste des collègues côté serveur
    return this._http.get('http://localhost:8080/collegue').toPromise()
    .then((tabColServeur:any[]) => tabColServeur.map(cServeur => new Collegue(cServeur.score, cServeur.pseudo, [cServeur.imageUrl])))
  }
/*
  donnerUnAvis(unCollegue:Collegue, avis:Avis):Promise<Collegue>  {
    // TODO Aimer ou Détester un collègue côté serveur
  }
*/

}

