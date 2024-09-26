import { Component, computed, model, signal } from '@angular/core';
import { MenuItem } from '../../models/menu-item';
import { MatListModule } from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ MatListModule, MatIconModule, ButtonModule, ListboxModule, FormsModule, RouterLink, TooltipModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  selectedItem: MenuItem = {
    icon: 'user-list',
    label: 'Patients'
  };
  collapsed = model<boolean>();
  navWidth = computed(() => this.collapsed() ? { width: '4.5rem'} : {width: '12rem'});

  menuItems = signal<MenuItem[]> ([
      {
        icon: 'user-list',
        label: 'Patients',
        route: 'patients'
      },
      {
        icon: 'health-devices',
        label: 'Devices',
        route: 'devices'
      },
      {
        icon: 'store-front',
        label: 'Order',
        route: 'orders'
      },
      {
        icon: 'admin',
        label: 'Admin'
      }
    ]);

  ngOnInit() {
    this.selectedItem = this.menuItems()[0];
  }
}
