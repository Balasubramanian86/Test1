import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookDataService } from './shared/book-data.service';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { routing } from './book.routing';
import { ConfirmCandeactivateGuardService } from './shared/confirm-candeactivate-guard.service';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookNewComponent } from './book-new/book-new.component';
import { JsonRequestOptionsService } from './shared/json-request-options.service';

@NgModule({
  imports: [
    routing,
    HttpModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookNewComponent
  ],
  providers: [
    BookDataService,
    ConfirmCandeactivateGuardService,
    { provide: BaseRequestOptions, useClass: JsonRequestOptionsService }
  ]
})
export class BookModule { }
