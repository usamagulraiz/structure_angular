import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { user } from 'src/app/interfaces/user';
import { AppService } from 'src/app/services/app.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    status: new FormControl('1'),
  });
  users: any;

  // user : user = {
  //   name: 'qqe',
  //   email: 'string',
  // phone: 0,
  // status: 'string',
  // }

  constructor(public service: AppService, public toastr: ToastrService) {}
  url = environment.url;
  ngOnInit(): void {}

  submit() {
    if (this.userForm.value.valid) {
      this.service.createUser(this.userForm.value).subscribe((res: any) => {
        console.log(res);
        this.users = res.data;
        this.toastr.success(res.message, 'Success');
      });
    } else {
      this.toastr.error('Form Invalid', 'Error');
    }
  }
}
