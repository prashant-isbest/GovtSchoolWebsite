import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css'],
})
export class ImagesliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const panels = document.querySelectorAll('.panel');

    console.log(panels);

    panels.forEach((p) => {
      p.addEventListener('mouseover', () => {
        removeActiveClass();
        p.classList.add('active');
      });
    });

    function removeActiveClass() {
      panels.forEach((p) => {
        p.classList.remove('active');
      });
    }
  }
}
