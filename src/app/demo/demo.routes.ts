import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

import { DemoComponent } from './demo.component';
import { ViewerComponent } from './viewer/viewer.component';
import { EditorComponent } from './editor/editor.component';

/**
 * Routes of the demo application
 */
const routes: Route[] = [
    {
        path: 'demo',
        component: DemoComponent,
        children: [
            {
                path: 'viewer',
                component: ViewerComponent,
            },
            {
                path: 'editor',
                component: EditorComponent,
            },
        ]
    }
];

/**
 * Routing modules of the demo application
 */
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class DemodRoutingModule { }
