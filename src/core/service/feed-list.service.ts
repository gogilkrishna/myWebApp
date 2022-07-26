import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FeedListService {

  constructor(
    public http:HttpClient
  ) { }

  getAllFeeds(){
    return this.http.get(`${environment.API}`)
  }

}
