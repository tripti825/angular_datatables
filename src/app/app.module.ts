import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { PageNotFoundComponent } from './not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule      } from 'ng2-toastr/ng2-toastr';

/**importing custom modules**/
import { HomeModule } from './home/home.module';
import { SharedModule } from './_shared/_shared.module';
import { Page1Module } from './page1/page1.module';
import { Page2Module } from './page2/page2.module';
import { UserModule } from './user/user.module';

/**services**/
import { LoggedinService } from './_service/isLoggedIn.service';
import { AlwaysAuthGuard } from './_service/guard.service';
import { CrudService     } from './_service/crud.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: 
    [
        HttpModule,
        HttpClientModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,    
        BrowserAnimationsModule,
        ToastModule.forRoot(),
        SharedModule,
        Page2Module,
        Page1Module,
        HomeModule,
        UserModule 
    ],
  providers: [CrudService, AlwaysAuthGuard, LoggedinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
