import { Component, OnInit } from '@angular/core';
import {LoggingService } from '../logging.service'
import {DataService } from '../data.service'

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
  //providers:[]
})
export class EventBindingComponent implements OnInit {
	inputData : string ;

  constructor(private loggingService:LoggingService, private dataService:DataService) { }

  ngOnInit() {

  }
  onInput(event:any){
    //debugger;
    //console.log(event.target.value)
    // const service = new LoggingService();
    // service.logStatus(event.target.value);
    this.loggingService.logStatus(event.target.value)
      //console.log(this.dataService.readData())

      this.inputData = event.target.value;
    }



  }
