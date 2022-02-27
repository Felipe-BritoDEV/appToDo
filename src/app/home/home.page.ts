import { Component } from '@angular/core';
import { ActionSheetController, AlertController, ModalController, ToastController } from '@ionic/angular';
import { AddmodalComponent } from '../modais/addmodal/addmodal.component';
import { OpmodalComponent } from '../modais/opmodal/opmodal.component';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks : any[] = [];

  showloader: boolean;


  constructor(private alertCtrl: AlertController, private UtilService: UtilService, private actionSheetCtrl : ActionSheetController, private modalCtrl : ModalController) {
    let taskJson = localStorage.getItem('taskDb');

    if (taskJson != null){
      this.tasks = JSON.parse(taskJson);
    }
  }



  excluir(task : any){
    this.tasks = this.tasks.filter(taskArray=> task != taskArray);
    this.updatelocal();
  }



  async showaddModal(){
    const modal = await this.modalCtrl.create({
      component: AddmodalComponent
      
    });

    

    await modal.present();

    const {data : tasks, role} = await modal.onWillDismiss();

    if(role === 'added'){
      
      document.location.reload();
      
    }


    console.log(tasks);
  }


  async openModal(task){
    const modal = await this.modalCtrl.create({
      component: OpmodalComponent,
      componentProps: {name: task.name, descr: task.descr, done: task.done}
    });


    await modal.present();

    const {data : tasks, role} = await modal.onWillDismiss();

    if(role === 'marcado'){
      document.location.reload();
    }

  }

  marcar(task){
    

    task.done = !task.done;

    this.updatelocal();
    
    document.location.reload();
    
    
  }

  updatelocal(){
    localStorage.setItem('taskDb', JSON.stringify(this.tasks));
  }
}
