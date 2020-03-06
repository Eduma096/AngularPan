import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {IPontos} from '../models/pontos';
import {Client} from '../models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  buscarClientes(): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.api}/clientes`);
  }

  buscarPontos(): Observable<IPontos> {
    return this.http.get<IPontos>(`${environment.api}/pontos`);
  }

  buscarClientesId(clientId: string): Observable<Client> {
    return this.http.get<Client>(`${environment.api}/clientes/${clientId}`);
  }
  
}