import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularHttpClientGetDemo';
  baseUrl = 'https://api.myjson.com/bins/ebxjl';
  private products  = []; 

  constructor(private httpClient: HttpClient){}

  get_products(){
    this.httpClient.get(this.baseUrl).subscribe((res : any[])=>{
      this.products = res;
        
    });
}
}
