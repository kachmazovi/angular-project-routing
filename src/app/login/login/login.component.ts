import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public userName = new FormControl('', [Validators.required])
  public password = new FormControl('', [Validators.required])

  constructor(private loginServ: LoginService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.route.data.pipe(
    //   tap(data => { console.log(data) })
    // ).subscribe()
    // console.log(this.router)
    // this.route.params.pipe(
    //   tap(params => console.log(params))
    // ).subscribe()
    this.loginServ.deleteUser('1').subscribe()
    this.loginServ.updateUser({
      firstName: 'firstName',
      lastName: 'lastName',
    }, '2').subscribe()
  }

  public login() {
    this.loginServ.loginUser().pipe(
      tap((users) => {
        console.log(users)
        const user = users.find(user => user.userName === this.userName.value)
        if (user && user.password === this.password.value) {
          this.router.navigate(['/dashboard'])
        } else {
          alert('Invalid username or password')
        }
      })
    ).subscribe()
  }

}
