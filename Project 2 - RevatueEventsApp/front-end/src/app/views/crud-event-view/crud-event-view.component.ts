import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event.model';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { ContextService } from '../../services/context.service';
import { InputValidatorService } from '../../services/input-validator.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-crud-event-view',
  templateUrl: './crud-event-view.component.html',
  styleUrls: ['./crud-event-view.component.css']
})
export class CrudEventViewComponent implements OnInit {

  private events: Event[] = [];
  private newEvent: Event = new Event();
  private eventId: Number;
  private event: Event;
  private isNew: boolean;
  private eventDate: Date;
  private eventImageUrl: String;
  private selectedFiles: FileList;

  private eventTagInput: String;
  private eventTagList: String[] = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private context: ContextService,
    private validator: InputValidatorService,
    private image: ImageService
  ) { }

  ngOnInit() {
    this.getEvents();
    this.eventId = this.context.getEventId();
    if (this.eventId === undefined) {
      console.log('No event, creating new');
      this.newEvent = new Event();
      this.eventImageUrl = 'http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg';
    } else {
      this.dataService.getEventById(this.eventId).subscribe(
        data => {
          if (data === null) {
            // Something went wrong
          } else {
            this.newEvent = <Event> data;
            this.eventTagList = this.newEvent.tags;
            if (this.newEvent.eventImageUrl) {
              console.log('Setting event image');
              this.eventImageUrl = this.newEvent.eventImageUrl;
            }
          }
        }
      );
    }
  }

  addTag() {
    this.eventTagList.push(this.eventTagInput);
    console.log(this.eventTagList);
    this.eventTagInput = '';
  }

  removeTag(tag: String) {
    this.eventTagList = this.eventTagList.filter(t => t !== tag);
  }

  getTags(): String[] {
    return this.eventTagList;
  }

  getEvents() {
    this.dataService.getAllEvents().subscribe(
      e => {
        this.events = e;
      }
    );
  }

  createEvent() {
    if (!this.validator.validateInputStrings(this.newEvent.name, this.newEvent.location, this.newEvent.time)) {
      alert('Invalid Input');
      return;
    }
    this.dataService.addEvent(this.newEvent.name, this.newEvent.description, this.newEvent.location, this.getTags(), this.newEvent.time)
    .subscribe(
      e => {
        console.log(e);
        this.router.navigateByUrl('/event-list');
      }
    );
  }

  updateEvent() {
    if (!this.validator.validateInputStrings(this.newEvent.name, this.newEvent.location, this.newEvent.time)) {
      alert('Invalid Input');
      return;
    }
    const event = this.newEvent;
    console.log(event);
    this.dataService.updateEvent(event).subscribe(
      data => {
        if (data === null) {
          // Bad things happened
        } else {
          console.log(data);
          // this.router.navigateByUrl('/event-list');
        }
      }
    );
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  uploadImage() {
    const file = this.selectedFiles.item(0);
    this.image.uploadEventImage(file, this.newEvent.name).promise().then(
      // On Success
      (data) => {
        console.log('Success', data);
        this.newEvent.eventImageUrl = data.Location;
        console.log(this.newEvent.eventImageUrl);
        this.eventImageUrl = data.Location;
      }
    ).catch(
      data => {
        console.log('Failure', data);
      }
    );
  }

}
