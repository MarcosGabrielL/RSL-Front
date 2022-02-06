import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

 baseUrl: String = environment.baseUrl;
 baseUrlPost : String = environment.baseUrlPost;
  
  public username: string = "";
  public password: string = "";

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }


     getPostByIdPerson(idcinefilo: string): Observable<Post[]> {
        const url = `${this.baseUrlPost}/comentarios/cinefilo/`.concat(idcinefilo);
        return this.http.get<Post[]>(url)
    }
  
    findById(id: number): Observable<Post> {
        const url = `${this.baseUrlPost}/comentarios/comentario/${id}`
        return this.http.get<Post>(url)
    }

    create(comentario: Post, idmovie : string ): Observable<Post>{
        const url = `${this.baseUrlPost}/comentarios/comentario/add/${idmovie}`
        return this.http.post<Post>(url, comentario);
    }
  
    delete(id: String):Observable<void> {
        const url = `${this.baseUrlPost}/comentarios/comentario/movie/{idmovie}/update/${id}`
        return this.http.delete<void>(url)
    }

  update(comentario: Post ):Observable<void> {
    const url = `${this.baseUrlPost}/comentarios/comentario/delete/${comentario.id}`
    return this.http.put<void>(url, comentario)
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
