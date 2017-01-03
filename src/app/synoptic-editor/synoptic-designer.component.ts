import { Component, OnInit } from '@angular/core';

import { SynopticBase } from './core/index';

/**
 * Synoptic designer
 */
@Component({
    selector: 'synoptic-designer',
    template: `
        <div></div>
    `
})

/**
 * Synoptic designer
 */
export class SynopticDesignerComponent extends SynopticBase implements OnInit {
    /**
     * Creates a new designer component
     */
    constructor() {
        super();
    }

    ngOnInit() { }
}