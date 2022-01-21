import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test-cli',
  templateUrl: './test-cli.component.html',
  styleUrls: ['./test-cli.component.scss']
})
export class TestCliComponent implements OnInit {
  personName="Amira Saber"
  imgUrl='assets/img/apple-touch-icon.png';
  showPassword=false;
  number=2;
  @ViewChild('f') test:any;
  constructor() {
    // setInterval(()=>(this.personName=this.personName +'1'),1000)
   }

  ngOnInit(): void {
  }

}
