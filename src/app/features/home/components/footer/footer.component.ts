import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DeviceCharacteristics } from '@app/root-store/device-store/device.state';


@Component({
  selector: 'gmu-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnChanges
{
  whatAmI: string;

  @Input() isProduction: boolean;
  @Input() deviceCharacteristics: DeviceCharacteristics;

  constructor() { }

  ngOnInit(): void
  {
    this.getWhatAmI();
  }

  ngOnChanges(changes: SimpleChanges)
  {
    if (changes.deviceCharacteristics && !changes.deviceCharacteristics.firstChange)
    {
      this.getWhatAmI();
    }
  }

  private getWhatAmI()
  {
    if (this.deviceCharacteristics?.isExtraSmall)
    {
      this.whatAmI = 'XSMALL';
    }
    else if (this.deviceCharacteristics?.isSmall)
    {
      this.whatAmI = 'SMALL';
    }
    else if (this.deviceCharacteristics?.isMedium)
    {
      this.whatAmI = 'MEDIUM';
    }
    else if (this.deviceCharacteristics?.isLarge)
    {
      this.whatAmI = 'LARGE';
    }
    else if (this.deviceCharacteristics?.isExtraLarge)
    {
      this.whatAmI = 'XLARGE';
    }
  }
}
