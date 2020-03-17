import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material/material.module'; 
import {CreatePostComponent} from './create-post/create-post.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component'
import { HttpClientModule } from '@angular/common/http';
import {DatePipePipe} from './pipes/date-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent, PostListComponent, DatePipePipe
  ],
  entryComponents: [CreatePostComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
