import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';




@Component({
  selector: 'app-opmodal',
  templateUrl: './opmodal.component.html',
  styleUrls: ['./opmodal.component.scss'],
})
export class OpmodalComponent {
  @Input() name: string;
  @Input() descr: string;
  @Input() done: boolean;

  tasks: any[] = [];

  

  constructor(private modalCtrl: ModalController) {
    let taskJson = localStorage.getItem('taskDb');

    if (taskJson != null) {
      this.tasks = JSON.parse(taskJson);
    }
  }

  dismissModal(){
    this.modalCtrl.dismiss(null, 'close');
  }

  descricao(descr){
    if (descr == null) {
      return false;
    }else{
      return true;
    }
  }

  duplicar(){
    
  
    let task = { name: this.name, descr: this.descr, done: this.done };

    this.tasks.push(task);


    this.updatelocal();

    

    this.modalCtrl.dismiss(this.tasks, 'marcado');
  }

  updatelocal() {
    localStorage.setItem('taskDb', JSON.stringify(this.tasks));
  }
  
}
