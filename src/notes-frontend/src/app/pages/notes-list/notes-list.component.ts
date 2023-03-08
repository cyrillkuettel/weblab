import {Component, OnInit} from '@angular/core';
import {Note} from "../../models/node.model";
import {NotesService} from "../../notes.service";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  notes: Note[] = new Array<Note>();

  constructor(private notesService: NotesService) {
  }

  ngOnInit(): void {

    this.notesService.getAll().subscribe((notesListResponse: Array<Note>) => {
      this.notes = notesListResponse;
    });
  }


  export() {
    if (!this.notes) {
      console.log("Can't find notes to export");
      return;
    }
    const jsonData = JSON.stringify(this.notes);
    const blob = new Blob([jsonData], {type: 'application/json'});
    const url = URL.createObjectURL(blob);

// Create a new anchor element to trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'notes.json';
    downloadLink.click();

// Clean up by revoking the URL object
    URL.revokeObjectURL(url);
  }
}
