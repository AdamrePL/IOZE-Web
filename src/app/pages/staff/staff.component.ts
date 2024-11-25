import { Component } from '@angular/core';
import { Employee } from './components/Employee.model';
import { EmployeeComponent } from './components/employee/employee.component';

@Component({
    selector: 'app-staff',
    standalone: true,
    imports: [EmployeeComponent],
    templateUrl: './staff.component.html',
    styleUrl: './staff.component.css',
})
export class StaffComponent {
    employees: Employee[] = [
        {
            name: 'Adam Koniuszy',
            Stanowisko: 'Kierownik, Profesor uczelni',
            phone: 914496230,
            email: 'adam.koniuszy@zut.edu.pl',
            room: '309',
        },
        {
            name: 'Małgorzata Hawrot-Paw',
            Stanowisko: 'Profesor uczelni',
            phone: 914496241,
            email: 'malgorzata.hawrot-paw@zut.edu.pl',
            room: '208',
        },
        {
            name: 'Tomasz Stawicki',
            Stanowisko: 'Profesor uczelni',
            phone: 914496478,
            email: 'tomasz.stawicki@zut.edu.pl',
            room: '210',
        },
        {
            name: 'Paweł Sędłak',
            Stanowisko: 'Profesor uczelni',
            phone: 914496472,
            email: 'pawel.sedlak@zut.edu.pl',
            room: '209',
        },
        {
            name: 'Andrzej Karbowy',
            Stanowisko: 'Adiunkt',
            email: 'andrzej.karbowy@zut.edu.pl',
            room: '303',
        },
        {
            name: 'Andrzej Gawlik',
            Stanowisko: 'Adiunkt',
            phone: 914496239,
            email: 'andrzej.gawlik@zut.edu.pl',
            room: '206',
        },
        {
            name: 'Viktar Taustyka',
            Stanowisko: 'Adiunkt',
            phone: 914496230,
            email: 'viktar.taustyka@zut.edu.pl',
            room: '204-b',
        },
        {
            name: 'Patryk Ratomski',
            Stanowisko: 'Asystent',
            phone: 914496242,
            email: 'patryk.ratomski@zut.edu.pl',
            room: '207',
        },
        {
            name: 'Roman Nadolny',
            Stanowisko: 'Specjalista',
            phone: 914496228,
            email: 'roman.nadolny@zut.edu.pl',
            room: '307',
        },
        {
            name: 'Anna Górska',
            Stanowisko: 'Starszy technik',
            phone: 914496230,
            email: 'anna.gorska@zut.edu.pl',
            room: '307',
        },
    ];
}

/**
 * # Grab all email adress from https://agro.zut.edu.pl/aktualnosci/struktura-wydzialu/katedra-inzynierii-odnawialnych-zrodel-energii.html
 *
 * document.querySelectorAll("#c33756 > div:nth-child(3) > table > tbody > tr > :nth-child(3)").forEach(text => {
 *     console.log('"' + text.innerText + '"')
 * })
 */
