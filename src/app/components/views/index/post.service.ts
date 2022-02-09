import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from './post.model';
import { FileDB } from './post.model';
import { HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

 baseUrl: String = environment.baseUrl;
 baseUrlPost : String = environment.baseUrlPost;
  
  public username: string = "";
  public password: string = "";





  constructor(private http: HttpClient, private _snack: MatSnackBar) { }


    UploadFiles(file : File, idpost : string ):  Observable<HttpEvent<any>> {

           const formData: FormData = new FormData();
          formData.append('file', file);
          formData.append('idpost', idpost);

          const req = new HttpRequest('POST', `${this.baseUrlPost}/imagens/imagem/add/${idpost}`, formData, {
            reportProgress: true,
            responseType: 'json',
            headers: {'Content-type': 'multipart/form-data'}
          });
          return this.http.request(req);

       
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
