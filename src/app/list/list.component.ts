import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  service = inject(CustomerService);
  getUserArray: any[] = [];

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

 
}
