import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '_models/hero';
import { HeroManagementService } from '_shared/services/hero-management.service';

@Component({
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero!: Hero;
  form = new FormGroup({})

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private route: ActivatedRoute,
    private state: HeroManagementService) {
  }

  ngOnInit(): void {
    const heroId = Number(this.route.snapshot?.params?.heroId);

    this.hero = this.state.getHero(heroId);

    this.form = this.fb.group({
      id: this.hero?.id,
      name: this.hero?.name,
      favorite: this.hero?.favorite
    });
  }

  saveHero(): void {
    const hero: Hero = this.form?.value;

    if (this.hero?.id) {
      this.state.updateHero(hero);
    } else {
      this.state.createHero(hero);
    }

    this.goBack();
  }

  deleteHero(): void {
    if (this.hero?.id) {
      this.state.deleteHero(this.hero.id);

      this.goBack();
    }
  }

  goBack(): void {
    this.location.back();
  }

}
