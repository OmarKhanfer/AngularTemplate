import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagerComponent } from './components/pager/pager.component';
import { ModalComponent } from './components/modal/modal.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [PagerComponent, ModalComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('pages', {}),
    EffectsModule.forFeature()
  ],
  exports: [NgbModule, FormsModule, ReactiveFormsModule]
})
export class CoreModule { }
