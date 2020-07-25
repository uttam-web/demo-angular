import { Component, OnInit, OnDestroy } from '@angular/core';
import { Metaservice } from '../../meta-service/meta.service';
import { MyserviceService } from '../../service/my-service.service';
import { Subscription, ReplaySubject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';

@Component({
  selector: 'app-promise-observable',
  templateUrl: './promise-observable.component.html',
  styleUrls: ['./promise-observable.component.css']
})
export class PromiseObservableComponent implements OnInit, OnDestroy {
  public randomnumber: Array<object> = [];
  public randomnumberone: Array<object> = [];
  public lastexecutedtime = 0;
  public servicecallcount = 0;
  // private randomsubscription: Subscription;
  private unsubscribe: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(public meta: Metaservice,private myservice: MyserviceService) { 

  }

  ngOnInit() {
    const data: object = {
      title: 'promise-observable',
      og_url: 'https://www.betoparedes.com/ ',
      og_type: 'promise-observable-example',
      og_title: 'promise-observable'
    };
    this.meta.setmeta(data);


    this.myservice.getrandomnumber().pipe(take(5)).subscribe((rand: number) => {
      const lastexecutedtime: number = Date.now();
      const p = 9;
      this.randomnumber.push({
        randnumber: rand,
        serviceid: this.servicecallcount,
        lastexecutedtime,
        executiongap: lastexecutedtime - this.lastexecutedtime
      });
      this.lastexecutedtime = lastexecutedtime;
      console.log(`Rceived  random number with observable  ${rand} service id : ${this.servicecallcount} `);
    });

    console.log(this.randomnumber,'randomnumber')


    new Promise((resolve, reject) => {  
      resolve(this.myservice.getrandomnumberpromise());
    }
    ).then((rand: number) => {
      console.log(`Rceived  random number with promise  ${rand} service id : ${this.servicecallcount} `, rand);
      this.randomnumberone.push({
        randnumber: rand,
        serviceid: this.servicecallcount,

      });
    }
    ).catch((err) => {
      this.randomnumberone = [];
    });

    this.servicecallcount = this.myservice.getservicecallcount();
  }

  ngOnDestroy() {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }

  unsubscriberand(){
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }

}
