import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-content-header',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './content-header.component.html',
  styleUrl: './content-header.component.scss',
})
export class ContentHeaderComponent {
  readonly title = input.required<string>();
  readonly subRoute = input.required<string>();
  readonly route = input<string>();
  readonly lastRoute = input<boolean>(false);
  readonly lastRouteName = input<string>();
}
