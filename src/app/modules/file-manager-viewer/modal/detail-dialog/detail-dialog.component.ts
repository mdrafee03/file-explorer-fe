import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileService } from 'src/app/services/fileService/file.service';
import { FileElement } from '../../../file-manager/interfaces/element.interface';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.css'],
  providers: [DatePipe],
})
export class DetailDialogComponent implements OnInit {
  properties: { key: string, value: string }[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FileElement,
    private datepipe: DatePipe,
    private fileServie: FileService,
  ) { }

  
  ngOnInit(): void {
    this.properties = [
      {
        key: 'Name',
        value: this.data.name,
      },
      {
        key: 'Type',
        value: this.data.isDirectory ? 'Folder' : this.data.type,
      },
      {
        key: 'Size',
        value: this.fileServie.formatBytes(this.data.size)
      },
      {
        key: 'Create Date',
        value: this.datepipe.transform(this.data.createdDate, 'medium') ?? ''
      },
      {
        key: 'Full Path',
        value: this.data.fullPath
      },
      {
        key: 'Access Permission',
        value: this.data.canWrite ? 'Read and Write' : this.data.canRead ? 'Read-only' : 'No Access'
      },
      {
        key: 'Execute Permission',
        value: this.data.canExecute ? 'Yes' : 'No'
      },
    ]
  }

}
