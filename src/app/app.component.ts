import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count:number = 0;
  show:boolean = false;
  onButtonClick()
  {
    this.count++;
  }

  onStarDBLClick()
  {
    if(this.show)
    {
      this.show = false;
    }
    else 
    {
      this.show = true;
    }
  }
}
