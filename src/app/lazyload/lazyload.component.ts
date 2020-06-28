import { Component, OnInit } from '@angular/core';
import { Metaservice } from '../meta-service/meta.service';

@Component({
  selector: 'app-lazyload',
  templateUrl: './lazyload.component.html',
  styleUrls: ['./lazyload.component.css']
})
export class LazyloadComponent implements OnInit {

  constructor(public meta: Metaservice) { }

  ngOnInit() {
    const data: object = {
      title: 'Lazy-load',
      og_url: 'https://www.betoparedes.com/ ',
      og_type: 'Lazy-load-Example',
      og_title: 'Lazy-load'
    };
    this.meta.setmeta(data);
  }


}
