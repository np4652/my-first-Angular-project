import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Import Routing */
import { AppRoutingModule } from './app-routing.module';
import { StudentRoutingModule } from './student/student-routing.module';
/* End Rounting */
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { StudentModule} from './student/student.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    StudentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
