import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SequenceService {

  constructor(private firestore: AngularFirestore) { }


  getSequenceExercice() {
    return this.firestore.doc('sequence/exerciceSequence').get();
  }

  getSequenceParcours() {
    return this.firestore.doc('sequence/parcoursSequence').get();
  }

  updateSequenceExercice() {
    const sequence = this.getSequenceExercice();
    sequence.autoincrement = ++;
    return this.firestore.doc('sequence/parcoursSequence').update();
  }
}
