import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private api: DataService) { }

  ngOnInit(): void {
    this.getData();

  }
itemPerPage : number = 5;
pagination: number =1;
searchItem:string = "";
  data;
  datax;
  name:any;
  nativeName;
  population;
  region;
  // array:any;
  array: Array<Custom> = [];
  table:any;

  getData(){
    this.api.getData().subscribe(data =>{
    //   console.log(data);
      this.data = data;

      // for (let clave of this.data){
      //     this.datax = clave;
      //     this.name = this.datax.name;
      //     this.nativeName = clave.nativeName;
      //     this.population = clave.population;
      //     this.region = clave.region;

      //     this.table ={
      //       "name": this.name,
      //       "nativeName": this.nativeName ,
      //       "population": this.population,
      //       "region":  this.region
      //     }

      //     this.array.push(this.table);

      //   // console.log(this.data);
      // }

      // console.log(this.array)
     
    })
  }

}


export class Custom
{
  name: any;
  nativeName: any;
  population: any;
  region: any;
}