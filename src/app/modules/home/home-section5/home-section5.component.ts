import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-section5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-section5.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSection5Component {

}
