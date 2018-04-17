import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app.routing.module';
import { AppComponent } from './app.component';
import { UserModule} from './user/user.module';
import { AgentModule} from './agent/agent.module';
import { ClientModule} from './client/client.module';
import { HttpModule } from '@angular/http';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AgentModule,
    ClientModule,
    LoginModule,

    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
