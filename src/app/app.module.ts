import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './shared/material/material.module';
import {TransacoesComponent} from './transacoes/transacoes.component';
import {HistoricoComponent} from './historico/historico.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ClientListItemComponent } from './client-list-item/client-list-item.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { CpfPipe } from './pipe/cpf.pipe';
import { BuscaPipe } from './pipe/busca/busca.pipe';
import { DateformatDirective } from './diretivas/dateformat.directive';
import { IsCPFPipe } from './pipe/is-cpf.pipe';
import { CpfFormatDirective } from './diretivas/cpf-format.directive';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    TransacoesComponent,
    HistoricoComponent,
    ClientListItemComponent,
    ClientDetailComponent,
    CpfPipe,
    BuscaPipe,
    DateformatDirective,
    IsCPFPipe,
    CpfFormatDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
