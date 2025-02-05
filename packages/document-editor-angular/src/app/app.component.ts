import { Component } from '@angular/core';



// import { MyLibComponent } from '../../projects/my-lib/src/lib/my-lib.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'document-editor';
}
