import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {IUsers} from '../users';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data: Array<IUsers>;
  isSorted = false;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => {
        this.data = data;
      });
  }

  swap(data, i, j) {
    const tmp = data[i];
    data[i] = data[j];
    data[j] = tmp;
  }

  compare(id1, id2) {
    if (id1 < id2) {
      return 1;
    }
    return -1;

  }

  sortTable() {
    const users = this.data;
    if (this.isSorted === false) {
      for (let i = 0; i < users.length; i++) {
        for (let j = i + 1; j < users.length; j++) {
          if (this.compare(users[i].id, users[j].id) === 1) {
            this.swap(users, i, j);
          }
        }
      }
      this.isSorted = true;
    } else {
      users.reverse();
    }
    this.data = users;

  }

}
