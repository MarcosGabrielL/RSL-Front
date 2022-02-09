import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from './post.model';
import { FileDB } from './post.model';
import { HttpHeaders, HttpEvent, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

 baseUrl: String = environment.baseUrl;
 baseUrlPost : String = environment.baseUrlPost;
  
  public username: string = "";
  public password: string = "";





  constructor(private http: HttpClient, private _snack: MatSnackBar) { }


    UploadFiles(file : File, idpost : string ): Observable<Object> {

        const formDate: FormData = new FormData();

        formDate.append('file', file);
        formDate.append('idpost', idpost);
       
        const options = {} as any;
         
        const url = `${this.baseUrlPost}/imagens/imagem/add`
        return this.http.post(url,  formDate,{ headers: {
                  'Content-Type': 'multipart/form-data',
                    'enctype': "multipart/form-data",
                    'Accept': 'application/json' }});


        //Accept': 'application/json',
        /* headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
                    'Content-Type': 'multipart/form-data; boundary=Inflow',
                    'enctype': "multipart/form-data",
                    'Accept': 'application/json' },
        params: params,
        reportProgress: true}*/
            
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
