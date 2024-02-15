import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  http = inject(HttpClient)
  constructor() { }

  getlist(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  };

  createList(createPostData: any){
    return this.http.post("https://jsonplaceholder.typicode.com/users", createPostData)
  }
}
