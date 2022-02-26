import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Hero } from '_models/hero';
import { MainRoutes } from '_models/main-routers.enum';
import { HeroManagementService } from '_shared/services/hero-management.service';

@Component({
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit, OnDestroy {

  mainRouters = MainRoutes;
  heroes!: Hero[];
  selectedHero!: Hero;

  private subscription!: Subscription;

  constructor(private state: HeroManagementService) {
  }

  ngOnInit(): void {
    this.heroes = this.state.getHeroList();
    this.subscription = this.state.getSelectedHero()
      .subscribe(hero => this.selectedHero = hero);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  isSelected(hero: Hero): boolean {
    return hero.id === this.selectedHero?.id;
  }

  setSelected(hero: Hero): void {
    this.state.setSelectedHero(hero);
  }

}
