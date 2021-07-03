import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    username : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    conpassword: new FormControl('', Validators.required),
   

  })

  constructor() { }

  ngOnInit(): void {
  }

}
