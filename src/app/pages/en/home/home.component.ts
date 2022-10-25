import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let c : number = 45;

    function draw(){

      let g = c+=0.3;

      document.documentElement.style.setProperty('--direction', g + 'deg');
      requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);

    let video = document.getElementById("videoPoc") as any;
    video.play();
  }



}
