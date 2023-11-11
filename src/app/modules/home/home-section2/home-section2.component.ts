import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-section2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-section2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSection2Component {

}
