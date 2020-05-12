import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.css']
})
export class ObjectivesComponent implements OnInit {

  objectives = [
    {"id": 1 , "name": "Generate a project with routing option", "details": "When creating a new angular project, one is prompted to select y/n to the question, 'Would you like to add Angular routing?' Selecting yes generates the necessary files for routing in the boilerplate."},
    {"id": 2 , "name": "Create components", "details": "This is done using the CLI command, ng generate component <component-name>."},
    {"id": 3 , "name": "Configure the component routes", "details": "This is done in the app-routing.module.ts file."},
    {"id": 4 , "name": "Use directives to navigate", "details": "The directives used are routerLink and routerLinkActive"},
  ]

  goToUrl(objective){
    this.router.navigate(['/objectives',objective.id]); 
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
