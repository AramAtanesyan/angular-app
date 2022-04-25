import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    h3 {
      color: yellow;
    }
  `],
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  name = 'Aram';


  writeFoo() {
    console.log('foo')
  }

  ngOnInit(): void {
    this.writeFoo();
  }
}
