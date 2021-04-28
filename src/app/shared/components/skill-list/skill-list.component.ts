import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';

import { Skill } from '@gql';
import { PathwayService } from '@app/root-store/pathway-store/pathway.service';


@Component({
  selector: 'gmu-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit
{
  @Input() title: string;
  @Input() subTitle: string;
  @Input() topX: number;
  @Input() skillList: Skill[];
  @Output('onClickSkill') skillSlickEventEmitter = new EventEmitter<Skill>();

  @HostBinding('class.has-skills-as-links') @Input() displaySkillsAsLinks: boolean = false;

  skillListToDisplay: Skill[];

  constructor() { }

  ngOnInit(): void
  {
    this.displaySkillsAsLinks = (this.displaySkillsAsLinks === undefined) ? false : this.displaySkillsAsLinks;

    if (this.skillList)
    {
      const sortedSkillsList: Skill[] = PathwayService.quickSortByDemandLevel(this.skillList);
      this.skillListToDisplay = (this.topX && this.topX > 0) ? sortedSkillsList.slice(0, this.topX) : sortedSkillsList;
    }
  }

  onClickSkill(skillModel: Skill)
  {
    if (this.skillSlickEventEmitter.observers.length > 0)
    {
      this.skillSlickEventEmitter.emit(skillModel);
    }
  }

}
