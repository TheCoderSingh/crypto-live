import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	selector: 'app-compare-table',
	templateUrl: './compare-table.component.html',
	styleUrls: ['./compare-table.component.css']
})
export class CompareTableComponent implements OnInit {

	data: Array<any> = [];
	public headerData = 0;
	@Input('header-data') 1;
	constructor(private http: Http) { }

	ngOnInit() {
		setInterval(() => {
			this.headerData++;
			this.http.get('https://api.coinmarketcap.com/v2/ticker/').subscribe(
				res => {
					let tempdata = [];
					tempdata = res.json()['data'];
					let tempKeys = Object.keys(tempdata);
					let tmpArray = [];
					for (let key of tempKeys) {
						tmpArray.push(tempdata[key]);
					}
					this.data = tmpArray;
				}
			);
		}, 2000);
	}
}
