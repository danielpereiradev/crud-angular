import { NgxTextEditorModule } from 'ngx-text-editor';

import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule, ToastrService, ToastrConfig } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FistComponentComponent } from './components/fist-component/fist-component.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TowWayBindingComponent } from './components/tow-way-binding/tow-way-binding.component';
import { FormsComponent } from './components/forms/forms.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { FilterPipe } from './pipes/filter.pipe';
import { TesteNgPdfComponent } from './components/teste-ng-pdf/teste-ng-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    FistComponentComponent,
    DirectivesComponent,
    ParentDataComponent,
    IfRenderComponent,
    EventosComponent,
    ListRenderComponent,
    PipesComponent,
    TowWayBindingComponent,
    FormsComponent,
    PaginaPrincipalComponent,
    FilterPipe,
    TesteNgPdfComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot({

    }),
    NgxTextEditorModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
