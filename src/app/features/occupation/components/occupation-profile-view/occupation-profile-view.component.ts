import { Component, OnInit, Input } from '@angular/core';
import { Occupation } from '@gql';


@Component({
  selector: 'gmu-occupation-profile-view',
  templateUrl: './occupation-profile-view.component.html',
  styleUrls: ['./occupation-profile-view.component.scss']
})
export class OccupationProfileViewComponent implements OnInit
{
  @Input() occupationProfileDetails: Occupation;

  constructor() { }

  ngOnInit(): void
  {
  }

}
