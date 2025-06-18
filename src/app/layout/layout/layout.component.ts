import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderActionsComponent } from '../header-actions/header-actions.component';
import { FileListComponent } from '../file-list/file-list.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarComponent,HeaderActionsComponent,FileListComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
