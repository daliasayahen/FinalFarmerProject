import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { PipeFormatPipe } from '../MyPipe/pipe-format.pipe';
import {MatRadioModule} from '@angular/material/radio';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations:
   [
    PipeFormatPipe

  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatRadioModule,
    TextFieldModule,
    MatDialogModule
    
  ],exports:[
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    PipeFormatPipe,
    MatRadioModule,
    TextFieldModule,
    MatDialogModule


  ]
})
export class SharedModule { }
