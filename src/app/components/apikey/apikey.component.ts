import { Component, OnInit, NgZone, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from "../../shared/services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-apikey',
  templateUrl: './apikey.component.html',
  styleUrls: ['./apikey.component.css']
})
export class ApikeyComponent implements OnInit {
  apiKey: string;
  show: boolean;
  userUid: string;
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private route: ActivatedRoute
  ) {
    this.show = false;
    this.route.queryParams.subscribe(params => {
      this.userUid = params['id'];
  });
  }

  ngOnInit() { 
    this.authService.GetAPIKey(this.userUid).subscribe((data)=>{
      this.apiKey = data.token;
    }) 
  }

  showPassword(){
    this.show = !this.show;
  }

}
