import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-section3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-section3.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSection3Component {

}
