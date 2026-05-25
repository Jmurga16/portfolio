import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Jose Murga';
  subTitle = 'Senior Full Stack Developer';
  displayedText = '';
  index = 0;
  typingSpeed = 85;

  ngOnInit(): void {
    this.startTyping();
  }

  startTyping(): void {
    if (this.index < this.subTitle.length) {
      this.displayedText += this.subTitle.charAt(this.index);
      this.index++;
      setTimeout(() => this.startTyping(), this.typingSpeed);
    }
  }
}
