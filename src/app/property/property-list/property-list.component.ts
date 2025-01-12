import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IPropertyBase } from 'src/app/models/iproperty-base';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent=1;
  properties: Array<IPropertyBase>;
  constructor(private route:ActivatedRoute,private housingService:HousingService) { }

  ngOnInit() {
    if(this.route.snapshot.url.toString()){

      console.log(this.route.snapshot.url.toString());

      this.SellRent=2;
    }
    this.housingService.GetAllproperties(this.SellRent).subscribe(data=>{
      this.properties =data
      console.log(data);


      },
      err =>{
        console.log(err);
      })
      }
  }


