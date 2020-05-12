import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-objective-details',
  templateUrl: './objective-details.component.html',
  styleUrls: ['./objective-details.component.css'] 
})
export class ObjectiveDetailsComponent implements OnInit {
  
  public objectiveId;
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id')); //read the route parameter
    this.objectiveId = id; //binding the parameter to the view
  }

}
