import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemePalette } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatCheckboxModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class LoginpageComponent {

  constructor(private router: Router) {};

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z]).{8,}'),
  ]);
  Otp = new FormControl('', [Validators.required, Validators.max(1111), Validators.min(1111)
  ])
  hide = true;
  color: ThemePalette = 'primary';
  isChecked : boolean = false;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  navigate() {
    this.router.navigate(['/home']);
  }
}
