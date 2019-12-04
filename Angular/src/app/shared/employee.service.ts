import { Injectable } from '@angular/core';
import {Employee} from './employee.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  readonly baseURL = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    console.log(emp);
    return this.http.post(this.baseURL, emp);

  }

  getEmployeeList() {
    return this.http.get(this.baseURL)
  }
}
