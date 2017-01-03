/**
 * Created by Matthieu Colas on 16/12/2016.
 */

import { Component } from "@angular/core";
import { SynopticComponent } from './core/index';


@Component({
    moduleId: module.id,
    selector: 'synoptic-image',
    template: `<div>image</div>`
})

export class SynopticImageComponent extends SynopticComponent {
    constructor() {
        super();
    }
}