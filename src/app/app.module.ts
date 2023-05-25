import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { GenerateDirective } from './generate.directive';
import { SortPipe } from './sort.pipe';
import { GroupComponent } from './group.component';


@NgModule({
  declarations: [
    AppComponent,
    GenerateDirective,
    SortPipe,
    GroupComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [GroupComponent]
})
export class AppModule { }
