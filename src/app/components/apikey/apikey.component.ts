import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from "../../shared/services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-apikey',
  templateUrl: './apikey.component.html',
  styleUrls: ['./apikey.component.css']
})
export class ApikeyComponent implements OnInit {
  show: boolean;
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.show = false;
  }

  ngOnInit() { 
    this.authService.GetAPIKey('123').subscribe((data: any[])=>{
      console.log(data);
    }) 
  }

  showPassword(){
    this.show = !this.show;
  }

}
