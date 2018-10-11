import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import { DataService } from '../../services/data.service';
import { ContextService } from '../../services/context.service';

@Injectable()
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchParam = '';

  constructor(private dataService: DataService, private context: ContextService) { }

  ngOnInit() {
  }

  search(): void {
    this.context.setSearchQuery(this.searchParam);
  }

}