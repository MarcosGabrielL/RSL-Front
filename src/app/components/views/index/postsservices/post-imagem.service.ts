import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Postimagem } from './sub-post.model';


@Injectable({
  providedIn: 'root'
})
export class PostImagemService {



 baseUrl: String = environment.baseUrl;
 baseUrlPost : String = environment.baseUrlPost;
  
  public username: string = "";
  public password: string = "";

   constructor(private http: HttpClient, private _snack: MatSnackBar) { }


     getPostimagemaoByIdPerson(idperson: string): Observable<Postimagem[]> {
        const url = `${this.baseUrlPost}/imagens/imagemperson/`.concat(idperson);
        return this.http.get<Postimagem[]>(url)
    }
  
    findById(id: string): Observable<Postimagem> {
        const url = `${this.baseUrlPost}/imagens/imagem/${id}`
        return this.http.get<Postimagem>(url)
    }

    create(postimagem: Postimagem): Observable<Postimagem>{

        const url = `${this.baseUrlPost}/imagens/postimagem/add`
        return this.http.post<Postimagem>(url, postimagem);
    }
  
    delete(id: String):Observable<void> {
        const url = `${this.baseUrlPost}/imagens/delete/${id}`
        return this.http.delete<void>(url)
    }

  update(Postimagem: Postimagem ):Observable<void> {
    const url = `${this.baseUrlPost}/imagens/update/${Postimagem.idperson}`
    return this.http.put<void>(url, Postimagem)
  }
  
  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }

	

}