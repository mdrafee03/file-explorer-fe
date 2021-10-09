import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerViewerComponent } from './file-manager-viewer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FileManagerModule } from '../file-manager/file-manager.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailDialogComponent } from './modal/detail-dialog/detail-dialog.component';
import { FileService } from 'src/app/services/fileService/file.service';
import { FileDataService } from './services/fileDataService/fileData.service';



@NgModule({
  declarations: [
    FileManagerViewerComponent,
    DetailDialogComponent,
  ],
  exports: [FileManagerViewerComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FileManagerModule,
    MatDialogModule,
    FlexLayoutModule,
    MatIconModule
  ],
  providers: [FileService, FileDataService],
})
export class FileManagerViewerModule { }
