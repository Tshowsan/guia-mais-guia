import { StarReviewComponent } from './components/star-review/star-review.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,

  ],
  declarations: [StarReviewComponent,],
  exports:[StarReviewComponent,]
})
export class ShareModule {}