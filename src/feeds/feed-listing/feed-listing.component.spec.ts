import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedListingComponent } from './feed-listing.component';

describe('FeedListingComponent', () => {
  let component: FeedListingComponent;
  let fixture: ComponentFixture<FeedListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
