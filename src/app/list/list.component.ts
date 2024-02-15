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

  // // global search

  // searchGlobally(event: Event) {
  //   const searchText = (event.target as HTMLInputElement).value.toLowerCase();
  //   if (!searchText) {
  //     this.getUserList();
  //   } else {
  //     this.getUserArray = this.filteredUsers.filter(user => {
  //       for (let key in user) {
  //         if (user.hasOwnProperty(key) && typeof user[key] === 'string') {
  //           if (user[key].toLowerCase().includes(searchText)) {
  //             return true;
  //           }
  //         }
  //       }
  //       return false;
  //     });
  //   }
  // }
  

  // sorting method
  sortListAsce(){
    this.getUserArray = this.getUserArray.sort((a, b) => a.name.localeCompare(b.name));
    // this.getUserArray = this.getUserArray.sort((a, z) => a.name - z.name);
  }

  sortListDesc(){
    this.getUserArray = this.getUserArray.sort((a, b) => b.name.localeCompare(a.name));
  }

  // Filter method

  // filterList(nameInput: HTMLInputElement) {
  //   if (nameInput.value) {
  //     this.getUserArray = this.getUserArray.filter(p => p.name === nameInput.value)
  //   }
  // }

  
}
