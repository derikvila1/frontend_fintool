import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RequestCreate, ResponseCreate, ResponseInputs} from "./input.model";

@Injectable({
  providedIn: 'root'
})

export class InputService {

  private url = "/api/inputs/";
  constructor(private http: HttpClient) { }

  getInputs(id:number): Observable<ResponseInputs[]>{
    return this.http.get<ResponseInputs[]>(this.url + "listar", {params:{id:id}}  );
  }
  
  deleteInput(id:number): Observable<any>{
    return this.http.delete<number>(this.url + "deletar", {body:{id}});
  }
  
  createInput(request: RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.url + "cadastrar", request);
  }

}
