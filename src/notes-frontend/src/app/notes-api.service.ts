import { Injectable } from '@angular/core';

import {environment} from "./enironments/environment";
import { HttpClient } from '@angular/common/http';
import {Note} from "./models/node.model";
@Injectable({
  providedIn: 'root'
})
export class NotesAPIService {

  readonly ROOT_URI: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll() {
    console.log("getAll() called");
    return this.http.get<Array<Note>>(this.ROOT_URI + '/notes');
  }

  get(uri: string) {
    return this.http.get<Note>(this.ROOT_URI + uri);
  }

  post(uri: string, payload: Object) {
    console.log(`add new note: post to  ${this.ROOT_URI + uri}`)
    return this.http.post(this.ROOT_URI + uri, payload);
  }

  put(uri: string, payload: Object) {
    return this.http.put(this.ROOT_URI + uri, payload);
  }


}
