import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotesListComponent} from "./pages/notes-list/notes-list.component";
import {MainLayoutComponent} from "./pages/main-layout/main-layout.component";
import {NoteDetailsComponent} from "./pages/note-details/note-details.component";
import {UserLoginComponent} from "./user-login/user-login.component";
import {AuthGuard} from "./helpers/auth.guard";

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
      { path: '', component: NotesListComponent , canActivate: [AuthGuard]},
      { path: 'login', component: UserLoginComponent },
      { path: 'new', component: NoteDetailsComponent , canActivate: [AuthGuard]},
      { path: ':title', component: NoteDetailsComponent , canActivate: [AuthGuard]}

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
