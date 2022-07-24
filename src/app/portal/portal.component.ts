import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  constructor(public sharedservice: SharedService) { }

  public prospect_data : any = [];
  public dropped_data : any = [];
  public offered_data: any = [];

  status: any = [
    {value: 'positive', image: 'assets/icons/positive.svg'},
    {value: 'negative', image: 'assets/icons/negative.svg'},
    {value: 'neutral', image: 'assets/icons/neutral.svg'}
  ];


  ngOnInit(): void {
    this.sharedservice.getPortalDetails().subscribe((res) => {
      this.prospect_data = res?.prospects;
      this.dropped_data = res?.dropped;
      this.offered_data = res?.offered;
    });
  }

  /*
  Name of Function : setJoiningStatus()
  @Parameters : value, index
  Function Description : This function is called after clicking on the joining status dropdown options
  */
  setJoiningStatus(value: string, i: number) {
    this.offered_data[i]['joining_status'] = value;
  }

  /*
  Name of Function : setBGVStatus()
  @Parameters : value, index
  Function Description : This function is called after clicking on the bgv status dropdown options
  */
  setBGVStatus(value: string, i: number) {
    this.offered_data[i]['bgv'] = value;
  }

  /*
  Name of Function : drop()
  @Parameters : event
  Function Description : This function is called after moving the prosprect candidate bar
  */
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.prospect_data, event.previousIndex, event.currentIndex);
  }
}
