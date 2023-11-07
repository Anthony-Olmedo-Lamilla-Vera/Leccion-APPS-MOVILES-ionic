import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageInfoPage } from './page-info.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: PageInfoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, IonicModule],
  exports: [RouterModule],
})
export class PageInfoPageRoutingModule {}
