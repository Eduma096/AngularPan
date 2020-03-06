import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../models/client';
import { ClientService } from '../services/client.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
  
})
export class ClientDetailComponent implements OnInit {
  @Input() clientId: string;
  client$: Observable<Client>;

  constructor(private clientService:ClientService, private router: Router) { }

  ngOnInit(): void {
    this.retriveClient()
  }

  private retriveClient(){
    this.client$ = this.clientService.buscarClientesId(this.clientId);
  }

  onBack(){
    this.router.navigateByUrl('/clientes')
  }
}
