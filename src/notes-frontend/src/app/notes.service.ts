import {Injectable} from '@angular/core';
import {Note} from "./models/node.model";
import {NotesAPIService} from "./notes-api.service";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[] = new Array<Note>();

  constructor(private webReqService: NotesAPIService) { }

  getAll() {
    return this.webReqService.getAll();
  }

  get(id: string) {
    return this.webReqService.get('/notes/' + id);
  }

  add(note: Note) {
    return this.webReqService.post('/notes', note);
  }

  update(id: number, title:string, content: string ) {
    let note  = new Note()
    note.title = title;
    note.content = content;
    return this.webReqService.put('/notes/' + title, note);
  }

}
