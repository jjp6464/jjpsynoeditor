import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Main component 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

// Application modules
import { SynopticModule } from './synoptic-editor/synoptic.module';
import { DemoModule } from './demo/demo.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SynopticModule,
    DemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
