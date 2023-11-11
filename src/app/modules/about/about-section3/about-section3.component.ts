import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'about-section3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section3.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutSection3Component {

}
