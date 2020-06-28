import { Component, OnInit } from '@angular/core';
import { Metaservice } from '../../meta-service/meta.service';

@Component({
  selector: 'app-lazyload-c1',
  templateUrl: './lazyload-c1.component.html',
  styleUrls: ['./lazyload-c1.component.css']
})
export class LazyloadC1Component implements OnInit {

  constructor(public meta: Metaservice) { }

  ngOnInit() {
    const data: object = {
      title: 'Lazy-load-c1',
      og_url: 'https://www.betoparedes.com/ ',
      og_type: 'Lazy-load-c1-Example',
      og_title: 'Lazy-load-c1'
    };
    this.meta.setmeta(data);
  }

}
