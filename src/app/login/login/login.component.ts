import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userName = new FormControl('')
  public password = new FormControl('')

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.data.pipe(
      tap(data => { console.log(data) })
    ).subscribe()
    console.log(this.router)
    this.route.params.pipe(
      tap(params => console.log(params))
    ).subscribe()
  }

  public login() { }

}
