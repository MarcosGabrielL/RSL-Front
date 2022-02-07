import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from './post.model';
import { FileDB } from './post.model';
import { HttpHeaders, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

 baseUrl: String = environment.baseUrl;
 baseUrlPost : String = environment.baseUrlPost;
  
  public username: string = "";
  public password: string = "";

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }


    UploadFiles(file : File, idpost : string ): Observable<Object>{
      console.log(file);

 let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');

         const options = {
           headers: new HttpHeaders({
              'Content-Type', 'multipart/form-data'
              })
            };

        const url = `${this.baseUrlPost}/imagens/imagem/add/${idpost}`

        return this.http.post(url, formData, options);
    }
  
  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }

	getTempoDecorrido(horacomentad?: string): Observable<string> {
		
		 const url = `${this.baseUrl}/comentarios/util/TempoDecorrido/${horacomentad}`
        return this.http.get(url, { responseType: 'text' })
	}

	getHoraServidor(): Observable<string> {
		 const url = `${this.baseUrl}/comentarios/util/HoraServidor`
        return this.http.get(url, { responseType: 'text' })
	}

}
