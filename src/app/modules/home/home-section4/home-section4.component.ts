import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-section4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-section4.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSection4Component {

}
