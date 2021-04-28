import { Component, OnInit, Input } from '@angular/core';

import { CONFIG } from '@env/config';
import { Occupation } from '@gql';


@Component({
  selector: 'gmu-occupation-card',
  templateUrl: './occupation-card.component.html',
  styleUrls: ['./occupation-card.component.scss']
})
export class OccupationCardComponent implements OnInit
{
  @Input() occupation: Occupation;

  imageUrl: string;
  salary?: number;

  constructor() { }

  ngOnInit(): void
  {
    this.imageUrl = `${CONFIG.IMAGES.ONET_BASE_URL}${this.occupation.imageName}`;
    this.salary = this.occupation.preferredSalary?.minimumSalaryPerYear;
  }

}
