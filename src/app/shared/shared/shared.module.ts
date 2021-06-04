import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TollbarComponent } from 'src/app/components/tollbar/tollbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [TollbarComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [TollbarComponent],
})
export class SharedModule {}
