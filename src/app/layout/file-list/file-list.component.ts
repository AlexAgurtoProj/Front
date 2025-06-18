import { Component } from '@angular/core';

@Component({
  selector: 'app-file-list',
  standalone: true,
  imports: [],
  templateUrl: './file-list.component.html',
  styleUrl: './file-list.component.scss'
})
export class FileListComponent {

  files = [
  {
    name: 'Demo Nexsys',
    type: 'folder',
    size: '',
    modifiedDate: 'Feb 10...',
    modifiedBy: 'Gerson Zuñ...',
    securityMark: ''
  },
  {
    name: 'eww.txt',
    type: 'txt',
    size: '10 Bytes',
    modifiedDate: 'Sep 16...',
    modifiedBy: 'Gerson Zuñ...',
    securityMark: ''
  },
  // ...
];

getIcon(type: string): string {
  switch (type) {
    case 'folder': return 'assets/icons/folder-yellow.svg';
    case 'txt': return 'assets/icons/file-txt.svg';
    case 'pptx': return 'assets/icons/file-ppt.svg';
    case 'docx': return 'assets/icons/file-doc.svg';
    default: return 'assets/icons/file-generic.svg';
  }
}

}
