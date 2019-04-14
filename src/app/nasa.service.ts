import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  public service: HttpClient;

  constructor(public param_service: HttpClient) {
    this.service = param_service;
  }

  public getImageOfTheDay(): Observable<string> {
    const obs1: Observable<any> = this.service.get("https://api.nasa.gov/planetary/apod?api_key=6B521jcHuzPbcHhDKNtVcdsd6kFA6HsSUEguo1ak");
    const treatment = (param_data: any) => {
      return param_data.url;
    };
    return obs1.pipe(map(treatment));
  }
}