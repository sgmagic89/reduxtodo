import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './containers/root/app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { ComponentsModule } from './components/index';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MytodosComponent } from './containers/mytodos/mytodos.component';
import { ManagetodoComponent } from './containers/managetodo/managetodo.component';

@NgModule({
  declarations: [AppComponent, MytodosComponent, ManagetodoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ComponentsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
