import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  title = 'José Murga'
  subTitle = 'FullStack Software Developer';
  displayedText = '';
  index = 0;
  typingSpeed = 100;

  ngOnInit(): void {
    this.startTyping();
  }

  //Effect Typing
  startTyping() {
    if (this.index < this.subTitle.length) {
      this.displayedText += this.subTitle.charAt(this.index);
      this.index++;
      setTimeout(() => this.startTyping(), this.typingSpeed);
    }
  }
}
