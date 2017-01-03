import { Component, OnInit } from '@angular/core';

import { SynopticBase } from './core/index';

@Component({
    selector: 'synoptic-viewer',
    template: `
        <div>vvv</div>
    `
})
export class SynopticViewerComponent extends SynopticBase implements OnInit {
    constructor() {
        super();
    }

    ngOnInit() { }
}