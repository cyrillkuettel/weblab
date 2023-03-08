import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';
import { FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from "@angular/common/http";
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    MainLayoutComponent,
    NoteCardComponent,
    NoteDetailsComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
