import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent {
  name: string = '';
  lastname: string = '';
  emailSubject: string = '';
  message: string = '';

  private titlecasePipe: TitleCasePipe = new TitleCasePipe();

  constructor() {}

  getFormInfo() {
    if (
      this.name != '' &&
      this.lastname != '' &&
      this.emailSubject != '' &&
      this.message != ''
    ) {
      console.log({
        name: this.transformUpperCase(this.name),
        lastname: this.transformUpperCase(this.lastname),
        emailSubject: this.emailSubject.toUpperCase(),
        message: this.message,
      });

      this.name = '';
      this.lastname = '';
      this.emailSubject = '';
      this.message = '';
    }
  }

  transformUpperCase(text: string): string {
    return this.titlecasePipe.transform(text);
  }

  // onInputNameBlur(event: Event) {
  //   const target = event.target as HTMLTextAreaElement;

  //   if (target.value != '') {
  //     this.name = target.value;
  //   }
  // }
  // onInputLastnameBlur(event: Event) {
  //   const target = event.target as HTMLTextAreaElement;

  //   if (this.lastname != '') {
  //     this.lastname = target.value;
  //   }
  // }
  // onInputEmailSubjectBlur(event: Event) {
  //   const target = event.target as HTMLTextAreaElement;

  //   if (target.value != '' && this.validateEmail(target.value)) {
  //     this.emailSubject = target.value;
  //   }
  // }
  // onInputMessageBlur(event: Event) {
  //   const target = event.target as HTMLTextAreaElement;

  //   if (target.value != '') {
  //     this.message = target.value;
  //   }
  // }
}
