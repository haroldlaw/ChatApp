import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup
  isTypePassword: boolean = true
  isLogin = false

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController
  ) {
    this.initForm()
  }

  ngOnInit(): void { }

  initForm() {
    this.form = new FormGroup({
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
    if (!this.form.valid) return;
    console.log(this.form.value);
    this.login(this.form);
  }

  login(form) {
    this.isLogin = true;
    this.authService.login(form.value.email, form.value.password).then(data => {
      console.log(data);
      this.isLogin = false;
      this.router.navigateByUrl('/home');
      form.reset();
    })
      .catch(e => {
        this.isLogin = false;
        console.log(e);
        let msg: string = 'Log in failed. Please try again.';
        if (e.code == 'auth/user-not-found') msg = 'Email address could not be found';
        else if (e.code == 'auth/wrong-password') msg = 'Please enter a correct password';
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
