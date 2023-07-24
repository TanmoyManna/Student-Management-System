import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard-component/dashboard.component';

// Stand Alone Compoments
import { CardsType1Component } from "@project/StandAloneComponents/Components/cards-type1/cards-type1.component";
import { GrpahType1Component } from "@project/StandAloneComponents/Components/grpah-type1/grpah-type1.component";
import { TableType1Component } from "@project/StandAloneComponents/Components/table-type1/table-type1.component";
import { FeedType1Component } from "@project/StandAloneComponents/Components/feed-type1/feed-type1.component";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // Stand Alone Compoments
    CardsType1Component,
    GrpahType1Component,
    TableType1Component,
    FeedType1Component
  ]
})
export class DashboardModule { }
