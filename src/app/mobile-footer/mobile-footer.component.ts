import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mobile-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileFooterComponent {

}
