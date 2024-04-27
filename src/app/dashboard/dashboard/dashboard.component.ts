import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.pipe(
      tap(params => console.log(params))
    ).subscribe()
    // console.log(this.route)
  }

  public navigate(path: string) {
    this.router.navigate([path], { relativeTo: this.route, queryParams: { path: path } })
  }

}
