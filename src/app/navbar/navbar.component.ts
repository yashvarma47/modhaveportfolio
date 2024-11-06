import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showContactForm: boolean = false;

  toggleContactForm(): void {
    this.showContactForm = !this.showContactForm;
  }

}
