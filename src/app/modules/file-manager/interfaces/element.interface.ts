export interface FileElement {
  id: string;
  isDirectory: boolean;
  name: string;
  type: string;
  size: number;
  createdDate: string;
  fullPath: string;
  canRead: boolean;
  canWrite: boolean;
  canExecute: boolean;
}
