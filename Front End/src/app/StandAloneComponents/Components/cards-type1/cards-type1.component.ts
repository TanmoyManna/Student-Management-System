import { Component, OnInit } from '@angular/core';
import {topcard,topcards} from './top-cards-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-type1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-type1.component.html',
  styleUrls: ['./cards-type1.component.scss']
})
export class CardsType1Component implements OnInit {

  topcards:topcard[];

  constructor() { 

    this.topcards=topcards;
  }

  ngOnInit(): void {
  }

}