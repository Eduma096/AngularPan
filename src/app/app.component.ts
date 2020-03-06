import {Component, OnInit} from '@angular/core';
import { Client } from './models/client';
import { ClientService } from './services/client.service';
import { IPontos } from './models/pontos';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error("Method not implemented.");
  }
  clients: Observable<Client[]>;
  selectedClientId: string;
  pontos: IPontos;
  busca: "paulo"

  constructor(private clientService: ClientService,
    private router: Router){}

  ngOnInit(): void {
    this.clients = this.clientService.buscarClientes();
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.selectedClientId=this.router.url.split('clientes/')[1];
      }
    })
  }
  
  onSelected(client: Client){
   this.router.navigate(['/clientes',client.id])
  }
}
