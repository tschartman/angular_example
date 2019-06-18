import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { DataService } from '../data.service';
import { IUser } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public userId;
  public user: IUser;
  constructor(private route: ActivatedRoute, private router: Router, private data: DataService) { }

  ngOnInit() {
   
      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.userId = id
      this.data.getUserById(id).subscribe((newUser) => {        
      this.user = newUser;            
      });
  }

}
