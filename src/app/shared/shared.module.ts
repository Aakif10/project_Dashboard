import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule} from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { FlexModule,FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardsComponent } from './widgets/cards/cards.component';
import { PiechartsComponent } from './widgets/piecharts/piecharts.component';
import { TablebasicexampleComponent } from './widgets/tablebasicexample/tablebasicexample.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    CardsComponent,
    PiechartsComponent,
    TablebasicexampleComponent

  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule


  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    CardsComponent,
    PiechartsComponent,
    TablebasicexampleComponent

  ]
})
export class SharedModule { }
