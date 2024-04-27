import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { adult, matchValidator } from 'src/app/shared/custom.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    userName: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    passwordGroup: new FormGroup(
      {
        password: new FormControl<string>('', [
          Validators.required,
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^ws]).{8,}$'
          ),
        ]),
        confirmPassword: new FormControl<string>('', [Validators.required]),
      },
      [matchValidator('password', 'confirmPassword')]
    ),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, adult]),
    adress: new FormGroup({
      city: new FormControl(''),
      street: new FormControl('')
    })
  })


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(
      tap(params => console.log(params))
    ).subscribe()
  }

  public get firstNameCtrl(): FormControl {
    return this.userForm.get('firstName') as FormControl
  }

  public get emailCtrl(): FormControl {
    return this.userForm.get('email') as FormControl
  }

  public get ageCtrl(): FormControl {
    return this.userForm.get('age') as FormControl
  }

}
