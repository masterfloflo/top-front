import { AvisComponent } from './avis/avis.component';
    
export class Collegue {
        nom:string;
        score:number;
        avis:AvisComponent;
        description:string;
        images:string[] ;

        constructor(nom:string, score:number, images:string[]) {
            this.nom  = nom
            this.score = score
            this.images = images
        }
        }
export enum Avis {
    AIMER='AIMER',
    DETESTER='DETESTER'
}
export class Vote {
    collegue:Collegue
    avis:Avis
    
    constructor(collegue:Collegue, avis:Avis) {
     this.collegue = collegue
     this.avis = avis
    }
}