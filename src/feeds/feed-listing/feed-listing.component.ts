import { Component, OnInit } from '@angular/core';
import {FeedListService} from "../../core/service/feed-list.service";

@Component({
  selector: 'app-feed-listing',
  templateUrl: './feed-listing.component.html',
  styleUrls: ['./feed-listing.component.scss']
})
export class FeedListingComponent implements OnInit {

  constructor(
    public feedSer: FeedListService
  ) {
    this.feedListing()
  }

  feedListing(){
    this.feedSer.getAllFeeds()
      .subscribe((res:any) => {
        console.log('feeds',res.value)
      })
  }

  ngOnInit(): void {
  }

}
