import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-section1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-section1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSection1Component {

}
