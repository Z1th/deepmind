import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit{
  @ViewChild('myVideo') videoRef!: ElementRef<HTMLVideoElement>;

  constructor() {}

  ngAfterViewInit(): void {
    const videoElement = this.videoRef.nativeElement;
    videoElement.play().catch(error => {
      console.error('Video playback failed', error);
    });
  }
}
