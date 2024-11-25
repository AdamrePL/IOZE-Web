import { Component, Input } from '@angular/core';
import { Employee } from '../Employee.model';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
    @Input({ required: true }) details: Employee = { name: "" };
}
