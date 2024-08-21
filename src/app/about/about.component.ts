import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  resume(){
    window.open("https://drive.google.com/file/d/1UD_82iOX0M8RET_6wIUWzC_H8lOVLrVF/view");
  }

}
