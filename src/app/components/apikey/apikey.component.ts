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
  apikeyval;
  id;
  toggle;

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private http: HttpClient,
    private route: ActivatedRoute
  ) { 
    this.route.queryParams.subscribe(params => {
      this.id = params['id']
    })
  }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/apiket?id='+this.id).subscribe(data => {
      this.apikeyval = data.token;
    })
  }


}
