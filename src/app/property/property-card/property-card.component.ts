import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IPropertyBase } from 'src/app/models/iproperty-base';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  @Input() property:IPropertyBase;
  @Input() hideIcons : boolean;


  constructor() { }

  ngOnInit() {
  }

}
