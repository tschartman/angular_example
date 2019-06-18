import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { IUser } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users: IUser[] = [];

  constructor(private _dataService: DataService, private router: Router) { }

  ngOnInit() {
    this._dataService.getUsers()
    .subscribe(data => {
        this.users = data
      }
    );
  }

showDetail(user){
  this.router.navigate(['/users', user.id])
}

}

