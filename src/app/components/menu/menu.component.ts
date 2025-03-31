import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      { label: 'Inicio', icon: 'pi pi-home', routerLink: '/patient' },
      { label: 'Pacientes', icon: 'pi pi-folder', routerLink: '/patient' }
    ];
  }
}
