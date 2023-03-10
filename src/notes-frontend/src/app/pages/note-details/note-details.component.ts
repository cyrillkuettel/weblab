import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Note} from "../../models/node.model";
import {NotesService} from "../../notes.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {
  note: Note | undefined;

  // title acts as an id for note:
  title: string | undefined;

  // whether this component is 'editing' mode or creating a new Note:
  is_new_note: boolean | undefined;

  constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.note = new Note();
      if (params['title']) { // We can fetch the title from the url params, because the routing module has the :title  entry
        // get this note from server
        this.is_new_note = false;
        this.notesService.get(params['title']).subscribe((response: Note) => {
          this.note = response;
          this.title = this.note.title
        });
      } else {
        this.is_new_note = true;
      }
    });

  }

  onSubmit(form: NgForm) {
    if (this.is_new_note) {
      this.notesService.add(form.value).subscribe((newNote) => {
        this.router.navigateByUrl('/');
      })
    } else { // update
      if (this.title != null) {
        /* probably there is a better way, with optional
         chaining instead of these cumbersome null checks */
        this.notesService.update(this.title, form.value.content).subscribe((newNote) => {
          this.router.navigateByUrl('/');
        })
      } else {
        console.error("fatal: this.title == null");
      }
    }
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

}
