import { FileElement } from "../../file-manager/interfaces/element.interface";

export interface FileData {
    name: string;
    isDirectory: boolean;
    size?: number;
}

export interface FilesResponse {
    files: FileElement[]
}

export interface FileResponse {
    file: FileElement
}