import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Note} from "./models/node.model";
@Injectable({
  providedIn: 'root'
})
export class NotesAPIService {

  readonly ROOT_URI: string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Array<Note>>(this.ROOT_URI + '/notes');
  }

  get(uri: string) {
    return this.http.get<Note>(this.ROOT_URI + uri);
  }

  post(uri: string, payload: Object) {
    return this.http.post(this.ROOT_URI + uri, payload);
  }

  put(uri: string, payload: Object) {
    return this.http.put(this.ROOT_URI + uri, payload);
  }

  // delete(uri: string) {
  //   return this.http.delete(this.ROOT_URI + uri);
  // }

}
