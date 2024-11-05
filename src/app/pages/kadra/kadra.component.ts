import { Component } from '@angular/core';
import { Employee } from './components/Employee';
import { EmployeeComponent } from "./components/employee/employee.component";

@Component({
  selector: 'app-kadra',
  standalone: true,
  imports: [EmployeeComponent],
  templateUrl: './kadra.component.html',
  styleUrl: './kadra.component.css'
})

export class KadraComponent {
    employees: Employee[] = [{ name: "robert" }, { name: "artur" }]
}
