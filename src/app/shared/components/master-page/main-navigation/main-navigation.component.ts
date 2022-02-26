import { Component } from '@angular/core';

import { MainRoutes } from '_models/main-routers.enum';

@Component({
  selector: 'toh-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent {
  mainRouters = MainRoutes;
}
