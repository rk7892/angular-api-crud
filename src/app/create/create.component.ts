import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  service = inject(CustomerService)
  createFormGroup: FormGroup;
  constructor(private formbuilder: FormBuilder,){
    this.createFormGroup = this.formbuilder.group({
      id: ['0'],
      name: [''],
      username: [''],
      email: [''],
      phone: [''],
      website:[''],

    })
  }

  createClientList(){
    const createPostData = this.createFormGroup.value;
    this.service.createList(createPostData).subscribe((result: any) =>{
      console.log(result);
      
    })
  }
}
