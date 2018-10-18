import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Event } from '../../models/event.model';
import { ContextService } from '../../services/context.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService,
    private context: ContextService,
    private router: Router) { }

  ngOnInit() {
    this.getEventDisplay();
  }

  eventsToDisplay: Event[];

  getEventDisplay()
  {
    return this.data.getAllEvents().subscribe(data => this.eventsToDisplay = data.slice(0, 6));
  }

  goToEvent(eventId: Number)
  {
    this.context.setEventId(eventId);
    this.router.navigateByUrl('/event-view');
  }

}
