import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TopbarComponent, SidebarComponent, RouterOutlet, ButtonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  collapsed = signal(false)
  sidenavWidth = computed(() => this.collapsed() ? '84px' : '204px')
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.activatedRoute.url.subscribe(segments => {
      const path = segments.map(segment => segment.path).join('/');
      console.log('Path:', path);
    });
  }
}
