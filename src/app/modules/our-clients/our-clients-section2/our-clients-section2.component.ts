import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'our-clients-section2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-clients-section2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurClientsSection2Component {

}
