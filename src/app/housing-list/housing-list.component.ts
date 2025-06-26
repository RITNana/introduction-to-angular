import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  @Input() locationList: HousingLocation[] = [];
  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>()

  results: HousingLocation[] = []
  constructor() { }
  searchHousingLocations(searchText: string) {
    if (!searchText) return
    // console.log(searchText)

    // use the array filter method and only aqccept values tha contain the searchText 
    // these values are compared by turning the, to lower case too
    this.results = this.locationList.filter(
      (location: HousingLocation) => location.city 
      .toLowerCase()
      .includes(
        searchText.toLowerCase()
      )
    )
  }




   selectHousingLocation(location: HousingLocation){
    this.locationSelectedEvent.emit(location)
  }

  ngOnInit(): void {
  }


 
}
