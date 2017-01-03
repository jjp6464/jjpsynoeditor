import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';

import { SynopticDefinition } from '../../synoptic-editor/core/index';

/**
*	Demo of the viewer
*/
@Component({
    templateUrl: './viewer.component.html',
})

export class ViewerComponent implements OnInit {

    /**
     * Configuration loaded from JSON
     */
    // private synopticDefinition: SynopticDefinition;
    private synopticDefinition: any;

    /**
     * Creates a new instance of the component
     */
    constructor(private http: Http) {
    }


    /**
     * Load data from json file
     */
    ngOnInit(): void {
        this.http.get('/app/demo/data/syno1.json').map(da => da.json()).subscribe(r => {
            this.synopticDefinition = r;
        });
    }
}
