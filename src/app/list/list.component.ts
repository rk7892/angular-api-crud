import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  service = inject(CustomerService);
  getUserArray: any[] = [];
  filteredUsers: any[] = [];
  filterBy: any;

  constructor(){
    this.getUserList();
  }

  getUserList(){
    this.service.getlist().subscribe((result: any) =>{
      this.getUserArray = result;
      console.log(result);
      console.log(this.getUserArray);
      
      
    })
  }

  // filterList() {
  //   this.filteredUsers = [...this.getUserArray.filter(user => this.getUserArray.name.includes(this.filterBy))];
  // }
 
  searchByProperty(event: Event, property: string) {
    const searchText = (event.target as HTMLInputElement).value;
    if (!searchText) {
      this.getUserList();
    } else {
      this.getUserArray = this.getUserArray.filter(user => {
        return user[property].toLowerCase().includes(searchText.toLowerCase());
      });
    }
  }
  
  
  searchName(event: Event) {
    this.searchByProperty(event, 'name');
  }

  searchPhone(event: Event) {
    this.searchByProperty(event, 'phone');
  }
  
  searchDesignation(event: Event) {
    this.searchByProperty(event, 'website');
  }
}
