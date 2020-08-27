import {Component, OnInit} from '@angular/core';
import {ExerciceService} from '../../../services/exercice.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AngularFirestoreCollection} from '@angular/fire/firestore';
import {Exercice, ExerciceWithId} from '../../../shared/models/exercice.model';

@Component({
  selector: 'app-exercice-creation',
  templateUrl: './exercice-creation.component.html',
  styleUrls: ['./exercice-creation.component.css']
})
export class ExerciceCreationComponent implements OnInit {

  name: string;
  exercices: any;

  constructor(private exerciceService: ExerciceService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
     this.exerciceService.getExercices().subscribe(exercices => {
       this.exercices = exercices.map(e => {
        const data = e.payload.doc.data() as Exercice;
        const id = e.payload.doc.id;
        return {id, data};
      });
    });
  }

  create() {
    this.exerciceService.createExercice({name: this.name});
  }

  update(exercice: Exercice) {
    this.exerciceService.updateExercice(exercice);
  }

  delete(id: string) {
    this.exerciceService.deleteExercice(id);
  }

  exerciceChange(event: any) {
    this.name = event.value;
  }
}
