import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Note} from "../../models/node.model";
import {NotesService} from "../../notes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit{
  note: Note | undefined;
 constructor(private notesService: NotesService, private router: Router) { }

  onSubmit(form: NgForm) {
   this.notesService.add(form.value);
   this.router.navigateByUrl('/');
  }

  cancel() {
   this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
    this.note = new Note();
  }
}
