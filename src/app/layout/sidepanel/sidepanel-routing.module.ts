import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidepanelComponent } from './sidepanel.component';

const routes: Routes = [{ path: '', component: SidepanelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidepanelRoutingModule { }
