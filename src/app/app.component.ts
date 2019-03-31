import { Component } from '@angular/core';
import { EventService } from './Module_App/_shared/services/event.service';
import { EventName } from './Module_App/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  mobileMenuState = 'show'; // hide/show
  constructor(private eventService: EventService) { }
  toggleMobileMenu() {
    this.eventService.pub(EventName.Event_MobileToggleClicked);
    this.mobileMenuState = this.mobileMenuState === 'hide' ? 'show' : 'hide';
    // this.containerState = this.mobileMenuState === 'hide' ? 'normal' : 'right';
  }

}
