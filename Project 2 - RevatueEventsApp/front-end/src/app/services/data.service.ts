import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { Event } from '../models/event.model';
import { properties } from '../app.properties';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = properties.url;

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url.concat('event/view/all'));
  }

  getSearchResults(query: string): Observable<Event[]> {
    return this.http.get<Event[]>(this.url.concat('event/view/search/search?name=' + query));
  }

  getEventsByUser(user: User): Observable<Event[]> {
    return this.http.get<Event[]>(this.url.concat(''));
  }

  getEventById(id: Number): Observable<Event> {
    return this.http.get<Event>(this.url.concat(`event/view/id/${id}`));
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url.concat('user/view/all'));
  }

  getUserByUsername(username: String): Observable<User> {
    const user = {
      username: username
    };
    return this.http.post<User>(this.url.concat(''), user);
  }

  addEvent(name: String, description: String, location: String, tags: String[], time: String) {
    const event = {
      name: name,
      description: description,
      location: location,
      tags: tags,
      time: time
    };
    return this.http.post<Event>(this.url.concat('event/add'), event);
  }

  deleteEvent(event: Event) {
    return this.http.post<Event>(this.url.concat('event/delete'), event);
  }

  updateEvent(event: Event) {
    return this.http.post<Event>(this.url.concat('event/update'), event);
  }

  updateUser(user: User) {
    return this.http.post<User>(this.url.concat('users/update'), user);
  }

  addUserToEvent(userEvent: String) {
    return this.http.post(this.url.concat('event/addUser'), userEvent);
  }

  addComment(eventId: Number, comment: String) {
    return this.http.post(this.url.concat(`event/comment/${eventId}`), comment);
  }
}
