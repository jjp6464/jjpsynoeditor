import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'demo/viewer',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }