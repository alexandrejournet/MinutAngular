import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Exercice} from '../shared/models/exercice.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {

  constructor(private firestore: AngularFirestore) {
  }

  getExercices() {
    return this.firestore.collection('exercices').snapshotChanges();
  }

  createExercice(exercice: Exercice){
    return this.firestore.collection('exercices').add(exercice);
  }

  updateExercice(exercice: any){
    delete exercice.id;
    this.firestore.doc('exercices/' + exercice.id).update(exercice.data);
  }

  deleteExercice(exerciceId: string){
    this.firestore.doc('exercices/' + exerciceId).delete();
  }
}
