import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public saveFlag = true
  // username = "";
  // password = "";

 public form = new FormGroup({
    username : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
   

  })

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){

    alert("login")
    this.router.navigate(['/dashboard']);
    // this.router.navigate(['/dashboard']);
  }

}
