import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  slides = [
    { image: 'assets/img/offer1.jpg' },
    { image: 'assets/img/offer2.jpg' },
    { image: 'assets/img/offer3.jpg' },
    { image: 'assets/img/offer4.jpg' }
  ];
  currentSlideIndex = 0;
  timer: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  startAutoSlide(): void {
    this.timer = setInterval(() => {
      this.changeSlide(1);
    }, 5000); // Change slide every 5 seconds
  }

  changeSlide(n: number): void {
    clearInterval(this.timer);
    this.currentSlideIndex = (this.currentSlideIndex + n + this.slides.length) % this.slides.length;
    this.startAutoSlide();
  }

  setSlide(index: number): void {
    clearInterval(this.timer);
    this.currentSlideIndex = index;
    this.startAutoSlide();
  }
}
