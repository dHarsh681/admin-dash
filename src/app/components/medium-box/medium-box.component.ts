import { LowerCasePipe, NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-medium-box',
  imports: [LowerCasePipe, NgClass],
  templateUrl: './medium-box.component.html',
  styleUrl: './medium-box.component.scss'
})
export class MediumBoxComponent {

  readonly title = input.required<string>();
  readonly value = input<number>(0);
  readonly icon = input.required<string>();
  readonly iconBgColor = input<string>();
  readonly iconColor = input<string>();
  readonly todayValue = input<number>(0);
  readonly badgeBgColor = input<string>();
  readonly badgeTextColor = input<string>();

}
