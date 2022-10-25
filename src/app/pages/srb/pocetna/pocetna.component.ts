import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let video = document.getElementById("videoPoc") as any;
    video.play();
  }

}
