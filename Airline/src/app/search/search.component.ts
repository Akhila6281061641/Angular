import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { pnr } from './pnr.model';
import { Search } from './search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',

})
export class SearchComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // this.GetSearchData();
  }
  GetSearchData() {
    this.http.get("https://localhost:44328/api/1.0/flight/Search?pnr="+this.SearchModel.pnr).subscribe(res => this.GetFromServer(res), res => console.log(res));
  }
  GetFromServer(res: any) {
    console.log(res);
    this.SearchModels = res;
  }
  SearchModel: Search = new Search();
  // SearchModels: Array<Search> = new Array<Search>();
  SearchModels: Array<pnr> = new Array<pnr>();


  AddSearch() {
    var searchdto = {
      PNR: this.SearchModel.pnr
    }
    console.log(searchdto);
    console.log(this.SearchModel);

   this.SearchModel = new Search();

  }
  


}
