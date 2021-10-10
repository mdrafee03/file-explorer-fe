import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GraphQLError } from 'graphql';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { FileService } from 'src/app/services/fileService/file.service';
import { FileElement } from '../file-manager/interfaces/element.interface';
import { DetailDialogComponent } from './modal/detail-dialog/detail-dialog.component';
import { FileDataService } from './services/fileDataService/fileData.service';

@Component({
  selector: 'app-file-manager-viewer',
  templateUrl: './file-manager-viewer.component.html',
  styleUrls: ['./file-manager-viewer.component.css']
})
export class FileManagerViewerComponent implements OnInit {
  fileElements: Observable<FileElement[]> | undefined;

  constructor(
    private fileService: FileService,
    private fileDataService: FileDataService,
    private dialog: MatDialog
  ) { }
  rootPath = '/';
  currentRoot: FileElement | undefined | null;
  currentPath: string = this.rootPath;
  canNavigateUp = false;
  loading = false;
  error = ''

  ngOnInit() {
    this.getFiles();
  }

  getFiles() {
    this.loading = true;
    this.error = ''
    this.fileElements = this.fileDataService.getFiles(this.currentPath).pipe(
      tap(() => this.loading = false),
      map(res => res.data.files),
      catchError((err: GraphQLError) => {
        this.error = err.message;
        return throwError(err);
      })
    )
  }

  navigateToFolder(element: FileElement) {
    this.currentPath = this.fileService.pushToPath(this.currentPath, element.name);
    this.getFiles();
    this.canNavigateUp = true;
  }

  navigateUp() {
    if (this.fileService.popFromPath(this.currentPath) === this.rootPath) {
      this.canNavigateUp = false;
    }
    this.currentPath = this.fileService.popFromPath(this.currentPath);
    this.getFiles();
  }

  onDetailClick(element: FileElement) {
    const fullPath = this.fileService.pushToPath(this.currentPath, element.name);
    this.fileDataService.getFile(this.fileService.pushToPath(this.currentPath, element.name)).subscribe(res => {
      let dialogRef = this.dialog.open(DetailDialogComponent, {
        data: { ...res.data.file, ...element, fullPath },
        width: '500px'
      });
      dialogRef.afterClosed().subscribe(res => {
        if (res) {
          element.name = res;
        }
      });
    });

  }
}
