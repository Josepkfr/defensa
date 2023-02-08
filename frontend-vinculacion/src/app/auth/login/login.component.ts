import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    //redirect to home if already logged in
    if (this.authService.userValue) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    // this.fb;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      alert("todos los campos son necesarios")
      return
    }

    this.loading = true;
    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
           const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
           this.router.navigateByUrl(returnUrl);
        },
        error: (error) => {
          this.error = error;
          this.loading = false;
        },
      });
  }
}
