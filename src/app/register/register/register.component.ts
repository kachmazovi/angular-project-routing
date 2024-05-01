import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { adult, matchValidator } from 'src/app/shared/custom.validators';
import { RegisterService } from '../register.service';
import { IRegisterUser } from '../register.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService]
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
    address: new FormGroup({
      city: new FormControl(''),
      street: new FormControl('')
    })
  })


  constructor(private router: Router, private route: ActivatedRoute, private registerServ: RegisterService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      tap(params => console.log(params))
    ).subscribe()
  }

  public registerUser(): void {
    const term: IRegisterUser = {
      firstName: this.firstNameCtrl.value,
      lastName: this.lastNameCtrl.value,
      userName: this.userNameCtrl.value,
      password: this.passwrordGroupCtrl?.get('password')?.value as string,
      email: this.emailCtrl.value,
      age: this.ageCtrl.value,
      address: {
        city: this.addressCtrl?.get('city')?.value as string,
        street: this.addressCtrl?.get('street')?.value as string
      }
    }

    this.registerServ.registerUser(term)
      .pipe(
        tap(() => {
          this.userForm.reset()
          this.router.navigate(['login'])
        })
      )
      .subscribe()
  }

  public get firstNameCtrl(): FormControl {
    return this.userForm.get('firstName') as FormControl
  }

  public get lastNameCtrl(): FormControl {
    return this.userForm.get('lastName') as FormControl
  }

  public get userNameCtrl(): FormControl {
    return this.userForm.get('userName') as FormControl
  }

  public get passwrordGroupCtrl(): FormGroup {
    return this.userForm.get('passwordGroup') as FormGroup
  }

  public get emailCtrl(): FormControl {
    return this.userForm.get('email') as FormControl
  }

  public get ageCtrl(): FormControl {
    return this.userForm.get('age') as FormControl
  }

  public get addressCtrl(): FormGroup {
    return this.userForm.get('address') as FormGroup
  }

}
