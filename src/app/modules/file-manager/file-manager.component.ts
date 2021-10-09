import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { FileElement } from './interfaces/element.interface';

@Component({
  selector: 'file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnChanges {
  constructor(public dialog: MatDialog) { }

  @Input() fileElements: FileElement[] | null | undefined;
  @Input() canNavigateUp: boolean | undefined;
  @Input() path: string | undefined;
  @Input() loading = false;

  @Output() detailClicked = new EventEmitter<FileElement>();
  @Output() navigatedDown = new EventEmitter<FileElement>();
  @Output() navigatedUp = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void { }

  navigate(element: Required<FileElement>) {
    if (element.isDirectory) {
      this.navigatedDown.emit(element);
    }
  }

  navigateUp() {
    this.navigatedUp.emit();
  }

  openDetailDialog(element: FileElement) {
    this.detailClicked.emit(element);

  }

  openMenu(event: MouseEvent, element: FileElement, viewChild: MatMenuTrigger) {
    event.preventDefault();
    viewChild.openMenu();
  }
}
