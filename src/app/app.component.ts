import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC3yZr3yF9PAcByg0Iagb53KWSpP35iB0c',
      authDomain: 'ng-recipe-book-373fd.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
  this.loadedFeature = feature;
  }
}
