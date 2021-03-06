import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidepanelRoutingModule } from './sidepanel-routing.module';
import { SidepanelComponent } from './sidepanel.component';


@NgModule({
  declarations: [SidepanelComponent],
  imports: [
    CommonModule,
    SidepanelRoutingModule
  ]
})
export class SidepanelModule { }
