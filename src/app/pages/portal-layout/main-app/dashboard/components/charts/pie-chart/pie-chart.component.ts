import { Component, signal } from '@angular/core';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-chart',
  imports: [NgxChartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent {
  data: any[] = [
    {
      name: 'Germany',
      value: 3940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
    {
      name: 'France',
      value: 5200000,
    },
    {
      name: 'UK',
      value: 10200000,
    },
  ];
  // view: number[] = [700, 400];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: any = 'below';

  colorScheme = signal<any>({
    name: 'Sales report',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: [],
  });

  constructor() {
    // Object.assign(this, { data: this.data });
  }

  ngOnInit() {
    this.colorScheme.update((scheme) => {
      return {
        ...scheme,
        domain: [
          // this.getCSSVariable('--primary-color'),
          // '#A1E9A3FF',
          // this.getCSSVariable('--tertiary-color'),
          // this.getCSSVariable('--warning-color'),
          // '#5a108f','#7b2cbf','#ecbcfd','#ffceff'
          '#3c096c',
          '#7b2cbf',
          '#ff7900',
          '#ff9e00',
        ],
      };
    });
  }

  getCSSVariable(name: string): string {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
