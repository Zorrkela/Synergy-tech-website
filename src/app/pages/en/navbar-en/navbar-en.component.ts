import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-en',
  templateUrl: './navbar-en.component.html',
  styleUrls: ['./navbar-en.component.css']
})
export class NavbarEnComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {

  }
  navigateToSerbia()
  {
    this.router.navigateByUrl("/pocetna")
  }
  navigateToEnglish()
  {
    this.router.navigateByUrl("/home")
  }
  navigateToGerman()
  {
    this.router.navigateByUrl("")
  }
}
