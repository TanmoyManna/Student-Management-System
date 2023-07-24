import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, TopSelling } from './top-selling-data';

@Component({
  selector: 'app-table-type1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-type1.component.html',
  styleUrls: ['./table-type1.component.scss']
})
export class TableType1Component implements OnInit {

  topSelling: Product[];

  constructor() {

    this.topSelling = TopSelling;
  }

  ngOnInit(): void {
  }

}
