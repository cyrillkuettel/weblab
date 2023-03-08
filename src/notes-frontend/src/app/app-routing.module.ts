import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotesListComponent} from "./pages/notes-list/notes-list.component";
import {MainLayoutComponent} from "./pages/main-layout/main-layout.component";
import {NoteDetailsComponent} from "./pages/note-details/note-details.component";
import {UserLoginComponent} from "./user-login/user-login.component";

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
      { path: '', component: NotesListComponent },
      { path: 'new', component: NoteDetailsComponent},
      { path: ':title', component: NoteDetailsComponent},
      { path: 'login', component: UserLoginComponent}

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
