import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatGridListModule, MatDialogModule, MatFormFieldModule} from '@angular/material';
import { Modaltutorial } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MaterializeModule } from 'angular2-materialize';





@NgModule({
  declarations: [
    AppComponent,
    Modaltutorial
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [Modaltutorial]
})
export class AppModule { }

