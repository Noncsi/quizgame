import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionDialogComponent } from './components/question-dialog/question-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { GameComponent } from './components/game/game.component';
import { LoginComponent } from './components/login/login.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDialogComponent,
    GameComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [QuestionDialogComponent]
})
export class AppModule { }
