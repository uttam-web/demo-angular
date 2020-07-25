import { Component, OnInit } from '@angular/core';
import { Metaservice } from '../../meta-service/meta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public meta: Metaservice) { }

  ngOnInit() {
    const data: object = {
      title: 'home',
      og_url: 'https://www.betoparedes.com/ ',
      og_type: 'Example',
      og_title: 'Demo-Angular-project Example'
    };
    this.meta.setmeta(data);
  }

}
