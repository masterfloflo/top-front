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
    .then((tabColServeur:any[]) => tabColServeur.map(coco => new Collegue(coco.score, coco.pseudo, [coco.imageUrl])))
  }
/*
  donnerUnAvis(unCollegue:Collegue, avis:Avis):Promise<Collegue>  {
    // TODO Aimer ou Détester un collègue côté serveur
    return this.http.post()
  }



la méthode permet de TOUT faire : request

par exemple .post (ICI ADRESSE URL  , CORPS DE LA REQUETE, OPTIONS POUR SPECIFIER LES ENTETES)

*/

}

