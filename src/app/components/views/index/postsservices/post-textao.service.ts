import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Posttext } from './sub-post.model';

@Injectable({
  providedIn: 'root'
})
export class PostTextaoService {


 baseUrl: String = environment.baseUrl;
 baseUrlPost : String = environment.baseUrlPost;
  
  public username: string = "";
  public password: string = "";

 constructor(private http: HttpClient, private _snack: MatSnackBar) { }


     getPostTextaoByIdPerson(idperson: string): Observable<Posttext[]> {
        const url = `${this.baseUrlPost}/textoes/textaoperson/`.concat(idperson);
        return this.http.get<Posttext[]>(url)
    }
  
    findById(id: string): Observable<Posttext> {
        const url = `${this.baseUrlPost}/textoes/textao/${id}`
        return this.http.get<Posttext>(url)
    }

    create(posttext: Posttext): Observable<Posttext>{
        const url = `${this.baseUrlPost}/textoes/textao/add`
        return this.http.post<Posttext>(url, posttext);
    }
  
    delete(id: String):Observable<void> {
        const url = `${this.baseUrlPost}/textoes/delete/${id}`
        return this.http.delete<void>(url)
    }

  update(posttext: Posttext ):Observable<void> {
    const url = `${this.baseUrlPost}/textoes/update/${posttext.idperson}`
    return this.http.put<void>(url, posttext)
  }
  
  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }

	getTempoDecorrido(horacomentad?: string): Observable<string> {
		
		 const url = `${this.baseUrlPost}/util/TempoDecorrido/${horacomentad}`
        return this.http.get(url, { responseType: 'text' })
	}

	getHoraServidor(): Observable<string> {
		 const url = `${this.baseUrlPost}/util/HoraServidor`
        return this.http.get(url, { responseType: 'text' })
	}

}
                                                                                                                                             