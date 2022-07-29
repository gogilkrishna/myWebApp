import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeService } from 'src/core/service/home/home.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(
    public homeSer:HomeService
  )
    {
    console.log(homeSer.status)
    }

  ngOnInit(): void {}
}
