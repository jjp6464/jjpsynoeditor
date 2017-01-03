import { NgModule, Component } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SynopticViewerComponent } from './synoptic-viewer.component';
import { SynopticDesignerComponent } from './synoptic-designer.component';

/**
 * Synoptic modules, holds the components for viewing and editing a synoptic (Mimic view)
 */
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        SynopticViewerComponent,
        SynopticDesignerComponent,
    ],
    exports: [
        SynopticViewerComponent,
        SynopticDesignerComponent
    ]
})

/**
 * Synoptic modules, holds the components for viewing and editing a synoptic (Mimic view)
 */
export class SynopticModule {
}
