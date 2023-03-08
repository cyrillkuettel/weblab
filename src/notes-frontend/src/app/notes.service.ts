import {Injectable} from '@angular/core';
import {Note} from "./models/node.model";
import {NotesAPIService} from "./notes-api.service";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[] = new Array<Note>();

  constructor(private webReqService: NotesAPIService) {
  }

  getAll() {
    return this.webReqService.getAll();
  }

  get(title: string) {

    return this.webReqService.get('/note/' + title);
  }

  add(note: Note) {
    console.log(`adding new note with title ${note.title} and content ${note.content}`);
    return this.webReqService.post('/note', note);
  }

  update(title: string, content: string) {
    let note = new Note()
    note.title = title;
    note.content = content;
    return this.webReqService.put('/note/' + title, note);
  }

}
