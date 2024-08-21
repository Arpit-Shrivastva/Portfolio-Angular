import { Component } from '@angular/core';

interface EventItem {
  name?: string;
  department?: string;
  date?: string;
  color?: string;
  icon?: string;
}

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent {

  events: EventItem[];

  constructor() {
    this.events = [
      {
        name: 'NIIT Limited',
        department: 'PGP Software Engineering',
        date: '2023 - Present',
        icon: 'pi pi-shopping-cart',
        color: '#9C27B0'
      },

      {
        name: 'Samrat Ashok Technological Institute',
        department: 'Bachelor of Engineering in PetroChemical',
        date: '2016 - 2020',
        icon: 'pi pi-cog',
        color: '#673AB7'
      },

      {
        name: 'School For Excellence',
        department: 'Higher Secondary',
        date: '2013 - 2014',
        icon: 'pi pi-shopping-cart',
        color: '#FF9800'
      },

      {
        name: 'School For Excellence',
        department: 'High School',
        date: '2011 - 2012',
        icon: 'pi pi-check',
        color: '#607D8B'
      }
    ];
  }
}
