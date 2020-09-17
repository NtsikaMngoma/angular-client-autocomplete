import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BooksService } from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BooksService]
})
export class AppComponent {
  title = 'AutoCompleteInAngular';

  searchTerm : FormControl = new FormControl();
  myBooks = <any>[];

  constructor (private service: BooksService) { }

  ngOnInit () {
    this.searchTerm.valueChanges.subscribe(
      term => {
        if (term != '') {
          this.service.search(term).subscribe(
            data => {
              this.myBooks = data as any[];
              // console.log(data[0].BookName);
          })
        }
    })
  }
}
