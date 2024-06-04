import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { WorkUsComponent } from './work-us/work-us.component';
import { FeaturedComponent } from './featured/featured.component';
import { PropertyComponent } from './property/property.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeBannerComponent, WorkUsComponent, FeaturedComponent, PropertyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'justhome';
}
