import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: Observable<firebase.User>;
  messages: FirebaseListObservable<any[]>;

  constructor(private _afAuth: AngularFireAuth, private _fbdb: AngularFireDatabase){
    this.user = _afAuth.authState;
    this.messages = this._fbdb.list('messages');

  }

  send(msg){
    let message = {
      msg: msg.value
    }
    this.messages.push(message);
    msg.value='';
  }



  login() {
    this._afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  logout() {
    this._afAuth.auth.signOut();
  }
}
