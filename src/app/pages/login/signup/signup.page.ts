import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: FormGroup
  isTypePassword: boolean = true
  isLoading: boolean = false

  constructor(private router: Router,
    private authService: AuthService,
    private alertController: AlertController
  ) {
    this.initForm()
  }

  ngOnInit() {
  }

  initForm() {
    this.signupForm = new FormGroup({
      username: new FormControl('',
        { validators: [Validators.required] }
      ),
      email: new FormControl('',
        { validators: [Validators.required, Validators.email] }
      ),
      password: new FormControl('',
        { validators: [Validators.required, Validators.minLength(8)] }
      ),
    });
  }

  onChange() {
    this.isTypePassword = !this.isTypePassword;
  }

  onSubmit() {
    if (!this.signupForm.valid) return;
    console.log(this.signupForm.value);
    this.register(this.signupForm);
  }

  register(form) {
    this.isLoading = true;
    console.log(form.value);
    this.authService.register(form.value).then((data: any) => {
      console.log(data);
      this.router.navigateByUrl('/login');
      this.isLoading = false;
      form.reset();
    })
      .catch(e => {
        console.log(e);
        this.isLoading = false;
        let msg: string = 'Sign up failed. Please try again.';
        if (e.code == 'auth/email-already-exist') {
          msg = 'Email already exist';
        }
        this.showAlert(msg);
      });
  }

  async showAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
