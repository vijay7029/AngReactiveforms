import { Component, OnInit,ViewEncapsulation,AfterViewInit,Output,EventEmitter,HostListener } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  registrationForm =this.fb.group({
    username:['',[Validators.required,Validators.minLength(3)]],
    password:['1234'],
    confirmpassword:['1234'],
    address:this.fb.group({
      city:['city'],
      state:['state'],
      postalcode:['postalcode']
    })
     
    

  })

  loadApi() {
    this.registrationForm.patchValue({
      username:'Vijay',
      password:'1234',
      confirmpassword:'1234',
      address:{
        city:'city',
        state:'state',
        postalcode:'postalcode'
      }

    })
  }

  

  ngOnInit(): void {
  }

}
