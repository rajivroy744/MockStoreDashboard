import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { SidepanelComponent } from '../layout/sidepanel/sidepanel.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidepanelComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, SidepanelComponent]
})
export class SharedModule { }
