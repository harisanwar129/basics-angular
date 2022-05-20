import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';

import { MaterialDesign } from './material/material';

const routes:Routes=[

  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign
  ]
})
export class AdminModule { }
