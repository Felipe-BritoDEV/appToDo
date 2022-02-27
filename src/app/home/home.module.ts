import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AddmodalComponent } from '../modais/addmodal/addmodal.component';
import { OpmodalComponent } from '../modais/opmodal/opmodal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, AddmodalComponent, OpmodalComponent],
  entryComponents: [AddmodalComponent, OpmodalComponent]
})
export class HomePageModule {}
