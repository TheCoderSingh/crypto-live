import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompareTableComponent } from './compare-table/compare-table.component';

import { DataTableModule } from "angular-6-datatable";
import { HttpModule } from '@angular/http';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		CompareTableComponent
	],
	imports: [
		BrowserModule,
		DataTableModule,
		HttpModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
