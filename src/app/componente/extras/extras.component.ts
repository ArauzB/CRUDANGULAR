import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  getdistrito(){
    this.route.navigate(['/home']);
  }

  getnodistrito(){
    this.route.navigate(['/home']);
  }

  comudepto(){
    this.route.navigate(['/home']);
  }

  comumuni(){
    this.route.navigate(['/home']);
  }

 

  setTimeout(){ window.location.assign ("https://arauzb.xyz/") } ;

}
