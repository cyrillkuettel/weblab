import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Note} from "../../models/node.model";

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit{
  note: Note | undefined;


  onSubmit(noteForm: NgForm) {
    console.log(noteForm);
  }

  ngOnInit(): void {
    this.note = new Note();
  }
}
