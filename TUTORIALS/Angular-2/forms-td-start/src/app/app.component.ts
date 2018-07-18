import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formValue;
  genders = ['male', 'female'];
  submitted: boolean;
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  @ViewChild('f') signupForm: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userdata: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   // questionAnswer: 'asdad',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userdata: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm){
  // 	console.log(form.value);
  // }

  onSubmit(formData: NgForm) {
    this.submitted = true;
    this.user.username = this.signupForm.value.userdata.username;
    this.user.email = this.signupForm.value.userdata.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    
    // this.formValue = formData['value'];
  }
}
