import { Injectable } from '@angular/core';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private user: User = null;
  private eventId: Number;
  private searchQuery: string;

  constructor() { }

  getUser(): User {
    return this.user;
  }

  setUser(user: User): void {
    this.user = user;
  }

  getEventId(): Number{
    return this.eventId;
  }

  setEventId(event: Number): void{
    this.eventId = event;
  }

  getSearchQuery(): string{
    return this.searchQuery;
  }

  setSearchQuery(searchQuery: string): void{
    this.searchQuery = searchQuery;
  }

}
