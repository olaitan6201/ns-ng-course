import { Component } from '@angular/core';

@Component({
  selector: 'ns-cururent-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: ['./current-challenge.component.css'],
  moduleId: module.id
})

export class CurrentChallengeComponent {
  challengeDescription = '';
  currentChallenge = '';

  onSetChallenge(){
    this.currentChallenge = this.challengeDescription;
  }
}
