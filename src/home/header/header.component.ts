import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/core/service/home/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public homeSer:HomeService

  ) { }

  ngOnInit(): void {
  }

  clickEvent()
  {
    this.homeSer.status = !this.homeSer.status
  }
}
