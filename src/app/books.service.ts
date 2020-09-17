import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Injectable()
export class BooksService {

  constructor (private httpService: HttpClient) { }

    search(term) {
        var listOfBooks = this.httpService.get('http://localhost:8089/books/_search?query=' + term)
        .pipe(
            debounceTime(500),  // WAIT FOR 500 MILLISECONDS AFTER EACH KEY STROKE.
            map(
                (data: any) => {
                    return (
                        data.length != 0 ? data as any[] : [{"BookName": "No Record Found"} as any]
                    );
                }
        ));

        return listOfBooks;
    }
}
