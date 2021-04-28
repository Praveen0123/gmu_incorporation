import { Component, OnInit } from '@angular/core';
import { CONFIG } from '@env/config';

@Component({
  selector: 'gmu-header-medium',
  templateUrl: './header-medium.component.html',
  styleUrls: ['./header-medium.component.scss']
})
export class HeaderMediumComponent implements OnInit
{
  novaIcon: string;
  gmuIcon: string;

  constructor() { }

  ngOnInit(): void
  {
    this.novaIcon = CONFIG.IMAGES.NOVA_ICON;
    this.gmuIcon = CONFIG.IMAGES.GMU_ICON;
  }

}
