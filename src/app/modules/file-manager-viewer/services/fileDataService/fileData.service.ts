import { Injectable } from "@angular/core";
import { ApolloQueryResult } from "@apollo/client/core";
import { Apollo, gql } from "apollo-angular";
import { Observable } from "rxjs";
import { FileResponse, FilesResponse } from "../../interfaces/file-response.interface";

@Injectable()
export class FileDataService {
    constructor(private apollo: Apollo) { }

    getFiles(path: string): Observable<ApolloQueryResult<FilesResponse>> {
        return this.apollo
            .watchQuery<FilesResponse>({
                query: gql`
                {
                    files(path: "${path}") {
                        name
                        isDirectory
                    }
                }`,
            })
            .valueChanges;
    }

    getFile(fullPath: string): Observable<ApolloQueryResult<FileResponse>> {
        return this.apollo
            .watchQuery<FileResponse>({
                query: gql`
                {
                    file(path: "${fullPath}") {
                        size
                        createdDate
                        type
                        canRead
                        canWrite
                        canExecute
                    }
                }`,
            })
            .valueChanges;
    }

}