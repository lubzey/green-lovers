import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from './../shared/services/search.service';

import { PlantInstance } from './../shared/models/plant.model';
import { User } from './../shared/models/user.model';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  template: require('./search.component.html'),
  styles: [require('./search.component.css')],
})
export class SearchComponent implements OnInit {

  private searchTerms = new Subject<string>();
  searchResults: Observable<any[]>;

  constructor(private searchService: SearchService,
    private router: Router) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {

    // this.searchResults = this.searchTerms
    //   .debounceTime(300)        // wait for 300ms pause in events
    //   .distinctUntilChanged()   // ignore if next search term is same as previous
    //   .switchMap(term => term   // switch to new observable each time
    //     // return the http search observable
    //     ? this.searchService.search(term)
    //     // or the observable of empty heroes if no search term
    //     : Observable.of<any[]>([]))
    //   .catch(error => {
    //     // TODO: real error handling
    //     console.log(error);
    //     return Observable.of<any[]>([]);
    //   });

      
  }


}
