import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './page/home/home.component';
import { ButtonCardComponent } from './components/button-card/button-card.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatCommonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatLineModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatPseudoCheckboxModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { LoginComponent } from './page/login/login.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RegisterComponent } from './page/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { FooterComponent } from './components/footer/footer.component';
import { PredefinedComponent } from './page/core/predefined/predefined.component';
import { CreateComponent } from './page/core/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonCardComponent,
    LoginComponent,
    TopbarComponent,
    HeaderComponent,
    RegisterComponent,
    BottomSheetComponent,
    ParticlesComponent,
    FooterComponent,
    PredefinedComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCommonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatLineModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatOptionModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatPseudoCheckboxModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
