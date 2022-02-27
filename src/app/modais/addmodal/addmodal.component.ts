import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { stringify } from 'querystring';

@Component({
  selector: 'app-addmodal',
  templateUrl: './addmodal.component.html',
  styleUrls: ['./addmodal.component.scss'],
})
export class AddmodalComponent {

  tarefaInput = new FormControl('', Validators.required);
  descrInput = new FormControl('', Validators.required);

  tasks: any[] = [];

  constructor(private modalCtrl: ModalController) {
    let taskJson = localStorage.getItem('taskDb');

    if (taskJson != null) {
      this.tasks = JSON.parse(taskJson);
    }
  }



  dismissModal() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  async add(tarefa, descri) {


    let task = { name: tarefa, descr: descri, done: false };

    this.tasks.push(task);

    this.updatelocal();

    this.modalCtrl.dismiss(this.tasks, 'added');
  }

  updatelocal() {
    localStorage.setItem('taskDb', JSON.stringify(this.tasks));
  }

}
