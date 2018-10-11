import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Event } from '../../models/event.model';
import { Router } from '../../../../node_modules/@angular/router';
import { ContextService } from '../../services/context.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  events: Event[] = [];
  query: string;

  constructor(private dataService: DataService,
    private router: Router,
    private context: ContextService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.query = this.context.getSearchQuery();
    this.dataService.getSearchResults(this.query).subscribe(
      e => {
        this.events = e;
      }
    )
  }

  viewEventDetails($event) {
    this.context.setEventId($event.currentTarget.childNodes[0].innerHTML);
    this.router.navigateByUrl('/event-view');
  }

  log(value) {
    console.log(value);
  }

  hasUsers(userArray: User[]) {
    if (userArray.length > 0) {
      return true;
    }
    return false;
  }

  hasTags(tagArray: String[]) {
    if (tagArray.length > 0) {
      return true;
    }
    return false;
  }

  displayUsers(userArray: User[]): String {
    let displayString = '';
    for (let i = 0; i < userArray.length; i++) {
      // displayString += userArray[i].firstname + " " + userArray[i].lastname;
      displayString += userArray[i].username;
      if (i == userArray.length - 1) {
        break;
      }
      displayString += ", ";
    }
    console.log(displayString);
    return displayString;
  }

  displayTags(tagArray: String[]): String {
    let displayString = '';
    for(let i = 0; i < tagArray.length; i++) {
      displayString += tagArray[i];
      if(i == tagArray.length - 1) {
        break;
      }
      displayString += ", "
    }
    console.log(displayString);
    return displayString;
  }

}
