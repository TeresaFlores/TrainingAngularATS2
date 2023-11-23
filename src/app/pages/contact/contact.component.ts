import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  showLoader = false;
  showAlert = false;
  sendMessageTimeOut: ReturnType<typeof setTimeout> = setTimeout(() => {});
  hideAlertTimeOut: ReturnType<typeof setTimeout> = setTimeout(() => {});

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(),
  });

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  handleSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
    } else {
      console.log('Form Values: ', this.contactForm.value);
      this.showLoader = true;
      this.sendMessageTimeOut = setTimeout(() => {
        this.showLoader = false;
        this.showAlert = true;
      }, 1000);

      this.hideAlertTimeOut = setTimeout(() => {
        this.showAlert = false;
      }, 5000);
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.sendMessageTimeOut);
    clearTimeout(this.hideAlertTimeOut);
  }
}
