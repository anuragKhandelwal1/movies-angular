import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchValueChange: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  searchMovie(ev): void {
    this.searchValueChange.emit(ev.target.value); // todo: Implement debounce
  }



}
