import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  activeLink: string = 'recipe';
  ngOnInit(): void {
  }

  onNavigate(link: string) {
    this.activeLink = link;
    
  }
}
