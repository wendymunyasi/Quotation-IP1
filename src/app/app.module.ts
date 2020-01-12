import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteDetailsubmitterComponent } from './quote-detailsubmitter/quote-detailsubmitter.component';
import { DateCounterComponent } from './date-counter/date-counter.component';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailComponent,
    QuoteDetailsubmitterComponent,
    DateCounterComponent,
    DateCountPipe,
    QuoteFormComponent,
    DeleteButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
