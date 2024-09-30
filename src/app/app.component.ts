import { Component, OnInit } from '@angular/core';
import { OverallService } from './overall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myProject';

  constructor(private overall : OverallService){
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.overall.get_data().subscribe(res => {
      console.log(res)
    })
  }
}
