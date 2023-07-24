import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';


// Other Dependencies
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";

// Stand Alone Compoments
import { NavigationComponent } from "@project/StandAloneComponents/ManagementShared/header/navigation.component";
import { SidebarComponent } from "@project/StandAloneComponents/ManagementShared/sidebar/sidebar.component";

@NgModule({
  declarations: [
    ManagementComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    NgbCollapseModule,
    // Stand Alone Compoments
    NavigationComponent,
    SidebarComponent
  ]
})
export class ManagementModule { }
