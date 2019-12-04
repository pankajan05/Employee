import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(employeeForm: any) {

  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.empService.selectedEmployee = {
      _id: '',
      first_name: '',
      last_name: '',
      address: '',
      phoneNO: '',
      email: '',
      position: '',
      office: '',
      salary: null
    };
  }
}
