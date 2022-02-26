import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from '_models/hero';

@Component({
  selector: 'toh-list-item',
  templateUrl: './hero-list-item.component.html',
  styleUrls: ['./hero-list-item.component.scss']
})
export class HeroListItemComponent {

  @Input() hero!: Hero;
  @Input() selected!: boolean;

  @Output() selectHero = new EventEmitter();

  onSelect(): void {
    this.selectHero.next(true);
  }

}
