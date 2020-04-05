import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { SidepanelComponent } from '../layout/sidepanel/sidepanel.component';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidepanelComponent],
  imports: [CardModule,
    CommonModule
  ],
  exports: [CardModule, HeaderComponent, FooterComponent, SidepanelComponent]
})
export class SharedModule { }
