import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user = [
    {
      key: 'fullName',
      label: 'Full name',
      value: '',
      type: 'text',
    },
    {
      key: 'username',
      label: 'username',
      value: '',
      type: 'text',
    },
    {
      key: 'email',
      label: 'Email address',
      value: '',
      type: 'email',
    },
    {
      key: 'password',
      label: 'Password',
      value: '',
      type: 'password',
    },
    {
      key: 'confirmPassword',
      label: 'Confirm password',
      value: '',
      type: 'password',
    }
  ];
  userId = null;
  alertMessage = '';
  alertType = '';
  alertVisible = false;
  loading = false;

  constructor(
    private _api: ApiService,
    private _token: TokenStorageService,
    private _router: Router
  ) {}

  // Update user fields with current details
  ngOnInit(): void {
    const { _id, fullName, email, username} = this._token.getUser();
    this.userId = _id;
    this.user[0].value = fullName;
    this.user[1].value = username;
    this.user[2].value = email;
    console.log(this.user);
  }

  canUpdate(): boolean {
    console.log(this.user.filter((field) => field.value.length > 0))
    return this.user.filter((field) => field.value.length > 0).length !== 5
      ? true
      : false;
  }

  // Submit data to be updated
  onSubmit(): void {
    this.alertVisible = false;
    if (this.user[3].value !== this.user[4].value) {
      this.alertType = 'error';
      this.alertMessage = 'Passwords do not match';
      this.alertVisible = true;
    } else {
      this.loading = true;
  
      this._api
        .putTypeRequest(`users/${this.userId}`, {
          fullName: this.user[0].value,
          username: this.user[1].value,
          email: this.user[2].value,
          password: this.user[3].value,
        })
        .subscribe(
          (res: any) => {
            console.log(res);
            this.alertMessage = res.message;
            this.alertType = 'success';
            this.alertVisible = true;
            this.loading = false;
            const oldDetails = this._token.getUser();
            this._token.setUser(res.data);
            this.user[3].value = '';
            this.user[4].value = '';
            // window.location.reload();
          },
          (err: any) => {
            console.log(err);
            this.alertMessage = err.error.message;
            this.alertVisible = true;
            this.alertType = 'error';
            this.loading = false;
          }
        );
    }
  }
}
