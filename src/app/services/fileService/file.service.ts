import { Injectable } from '@angular/core';

@Injectable()
export class FileService{
   pushToPath(path: string, folderName: string) {
    let p = path === '/' ? '' : path;
    p += `/${folderName}`;
    return p;
  }

  popFromPath(path: string) {
    let p = path ? path : '';
    let split = p.split('/');
    console.log('split', split);
    split.splice(-1, 1);
    p = split.join('/');
    p = p === "" ? '/' : p;
    return p;
  }

  formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}
