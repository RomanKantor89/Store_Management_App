import { Component, OnInit } from '@angular/core';
import { UserAccount, Card } from 'src/app/classes/user-account';
import { Activity, ActivityType } from 'src/app/classes/activity';
import { UserService } from 'src/app/dataServices/user.service';

enum CardAction {
  AddFunds = 0,
  DeleteCard = 1
}

@Component({
  selector: 'app-prepaid-card',
  templateUrl: './prepaid-card.component.html',
  styleUrls: ['./prepaid-card.component.css']
})
export class PrepaidCardComponent implements OnInit {

  // Data properties
  addFundsAmount: number;
  user: UserAccount;
  activity: Activity;

  // UI properites
  confirmDeletion: string;
  selectedCardAction: CardAction;

  constructor(
    private userService: UserService
  ) {
    this.confirmDeletion = '';
    this.activity = new Activity();
  }

  ngOnInit() {
    this.getUser();
  }

  // User functions
  getUser(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.user);
  }

  setUser(): void {
    this.userService.updateUser(this.user)
    .subscribe(
      () => console.log('User set'),
      (err) => console.error(err)
    );
  }

  // Card functions
  createCard(): void {
    this.user.card = new Card();
    this.setUser();
  }

  addFunds(): void {
    this.activity.timeStamp = (new Date()).getTime();
    this.activity.activityType = ActivityType.Load;

    this.user.card.currBalance = Math.round(
      (this.user.card.currBalance * 100) +
      (this.activity.amount * 100)
    ) / 100;

    this.user.card.activity.push(this.activity);
    this.activity = new Activity();

    this.setUser();
  }

  deleteCard(): void {
    this.user.card = null;
    this.setUser();
  }

  // Date functions
  convTimeStampToDate(timeStamp): any {
    const date = new Date(timeStamp);
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    return days[date.getUTCDay()] + ' • ' + date.getHours().toString() + ':' + date.getMinutes();
  }
}
