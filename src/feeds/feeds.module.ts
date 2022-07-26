import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedListingComponent } from './feed-listing/feed-listing.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '', component:FeedListingComponent
  },
]

@NgModule({
  declarations: [
    FeedListingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class FeedsModule { }
