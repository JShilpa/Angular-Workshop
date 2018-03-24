import {Injectable } from '@angular/core';
import {DataService } from './data.service';

@Injectable()

export class LoggingService{

	constructor(private dataService:DataService){}

	logStatus(msg: any){
		console.log(msg);
		console.log(this.dataService.readData())
  

	}

}