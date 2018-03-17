import { Component } from '@angular/core';
import { fadeAnimation} from './animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'app';
  loadedFeature = 'recipe';

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
