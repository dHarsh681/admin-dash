import { Component, signal } from '@angular/core';
import { UsersComponent } from '../users/users.component';
import { CardComponent } from '../../../../components/card/card.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { BoxesComponent } from './components/boxes/boxes.component';
import { PieChartComponent } from "./components/charts/pie-chart/pie-chart.component";
import { BarVerticalChartComponent } from "./components/charts/bar-vertical-chart/bar-vertical-chart.component";

@Component({
  selector: 'app-dashboard',
  imports: [
    UsersComponent,
    CardComponent,
    ChatBoxComponent,
    BoxesComponent,
    PieChartComponent,
    BarVerticalChartComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
