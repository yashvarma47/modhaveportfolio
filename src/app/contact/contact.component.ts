import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // Form submission handler
  onSubmit() {
    // Here, you would normally handle form submission, e.g., sending the data to a server.
    console.log('Form submitted', this.contact);

    // Reset the form
    this.contact = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

}
