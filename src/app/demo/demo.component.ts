import { Component } from '@angular/core';

/**
*	Demo component
*/
@Component({
    template: `     
        <section class="main-container">
            <router-outlet></router-outlet>
        </section>`,
})
export class DemoComponent { }
