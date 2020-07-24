import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(public http :HttpClient) { }
getData(){
  return this.http.get('https://backendnode.azurewebsites.net/getMeg');
}

}
