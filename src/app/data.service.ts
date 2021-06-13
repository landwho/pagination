import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient)  { }

url = 'https://restcountries.eu/rest/v2/all?fbclid=IwAR1qLEVULc8rsRQK9IFQItlkJzEMLEHuS1R72swba337Fcxlvs2dJXkaEdE';


getData(){
  return this.http.get(this.url);
}


}
