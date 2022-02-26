import { Injectable } from '@angular/core';

import { Hero } from '_models/hero';

import { DataProviderService } from './data-provider.service';
import { Observable, Subject } from 'rxjs';

/**
 * Provide basic CRUD operation for Heroes
 * */
@Injectable({
  providedIn: 'root'
})
export class HeroManagementService {

  private readonly heroList: Hero[];
  private selectedHero = new Subject<Hero>()

  constructor(private data: DataProviderService) {
    this.heroList = [...data.getHeroes()];
  }

  setSelectedHero(hero: Hero): void {
    this.selectedHero.next(hero);
  }

  getSelectedHero(): Observable<Hero> {
    return this.selectedHero.asObservable();
  }

  getTopHeroes(): Hero[] {
    return this.heroList.filter(hero => hero.favorite);
  }

  getHeroList(): Hero[] {
    return this.heroList;
  }

  createHero(hero: Hero): void {
    const maxId = this.heroList.reduce((max, hero) => max > hero.id ? max : hero.id, 0);
    const newHero = {
      id: maxId + 1,
      name: hero.name,
      favorite: hero.favorite
    };

    this.heroList.push(newHero);
  }

  getHero(id: number): Hero {
    return this.heroList.find(hero => hero.id === id) as Hero;
  }

  updateHero(hero: Hero): void {
    const heroIndex = this.heroList.findIndex(_hero => _hero.id === hero.id);

    this.heroList.splice(heroIndex, 1, hero);
  }

  deleteHero(id: number): void {
    if (id) {
      const heroIndex = this.heroList.findIndex(_hero => _hero.id === id);

      this.heroList.splice(heroIndex, 1);
    }
  }
}
