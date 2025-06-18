import { Component,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  showFilesSection = true;


  toggleFiles(){
    this.showFilesSection = !this.showFilesSection;
  }
  
}
