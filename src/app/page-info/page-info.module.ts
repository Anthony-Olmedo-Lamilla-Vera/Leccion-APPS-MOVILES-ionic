import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageInfoPageRoutingModule } from './page-info-routing.module';

import { PageInfoPage } from './page-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageInfoPageRoutingModule
  ],
  declarations: [PageInfoPage]
})
export class PageInfoPageModule {}
