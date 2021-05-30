import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit, AfterViewInit {
  constructor() {}

  @ViewChild('eventsContent') eventsContent: ElementRef<HTMLDivElement>;
  @ViewChild('newsContent') newsContent: ElementRef<HTMLDivElement>;
  @ViewChild('olympiadContent') olympiadContent: ElementRef<HTMLDivElement>;
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // console.log(' def e' + <HTMLElement>this.eventsContent.nativeElement);
  }

  onClickedNav(s: String): void {
    console.log(s);
    if (s === 'events') {
      this.resetActive();
      // console.log(this);
      this.eventsContent.nativeElement.classList.add('active');
    }
    if (s === 'news') {
      this.resetActive();
      console.log(this.newsContent.nativeElement.classList.add('active'));
    }
    if (s === 'olympiad') {
      this.resetActive();
      console.log(this.olympiadContent.nativeElement.classList.add('active'));
    }
  }

  resetActive(): void {
    console.log('resetting');
    console.log(this.eventsContent.nativeElement.classList.remove('active'));
    console.log(this.newsContent.nativeElement.classList.remove('active'));
    console.log(this.olympiadContent.nativeElement.classList.remove('active'));
  }

  onClickedNav2(): void {}
}
