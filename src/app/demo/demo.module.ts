import { NgModule, Component } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SynopticModule } from '../synoptic-editor/synoptic.module';

import { DemodRoutingModule } from './demo.routes';
import { DemoComponent } from './demo.component';
import { ViewerComponent } from './viewer/viewer.component';
import { EditorComponent } from './editor/editor.component';

/**
 * Demo module
 */
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SynopticModule,
        DemodRoutingModule,
    ],
    declarations: [
        DemoComponent,
        ViewerComponent,
        EditorComponent
    ],
    exports: [DemoComponent]
})

export class DemoModule {
}
