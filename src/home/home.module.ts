import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HeaderComponent } from './header/header.component';



const routes: Routes = [
  {
    path: '', component:HomeComponent,
    children:[
      {
        path: 'feeds',
        loadChildren: () => import('../feeds/feeds.module').then(m => m.FeedsModule)
      },
    ]
  },
]
@NgModule({
  declarations: [
    HomeComponent,
    NavigationBarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatToolbarModule

  ]
})
export class HomeModule { }
