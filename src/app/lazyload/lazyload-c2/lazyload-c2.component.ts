import { Component, OnInit } from '@angular/core';
import { Metaservice } from '../../meta-service/meta.service';

@Component({
  selector: 'app-lazyload-c2',
  templateUrl: './lazyload-c2.component.html',
  styleUrls: ['./lazyload-c2.component.css']
})
export class LazyloadC2Component implements OnInit {

  constructor(public meta: Metaservice) { }

  ngOnInit() {
    const data: object = {
      title: 'Lazy-load-c2',
      og_url: 'https://www.betoparedes.com/ ',
      og_type: 'Lazy-load-c2-Example',
      og_title: 'Lazy-load-c2'
    };
    this.meta.setmeta(data);
  }
}
