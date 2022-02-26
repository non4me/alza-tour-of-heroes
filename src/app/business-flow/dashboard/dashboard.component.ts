import { Component, OnInit } from '@angular/core';

import { Hero } from '_models/hero';
import { MainRoutes } from '_models/main-routers.enum';
import { HeroManagementService } from '_shared/services/hero-management.service';

@Component({
  selector: 'toh-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mainRouters = MainRoutes;
  topList: Hero[] = [];

  constructor(private state: HeroManagementService) { }

  ngOnInit(): void {
    this.topList = this.state.getTopHeroes();
  }

}
