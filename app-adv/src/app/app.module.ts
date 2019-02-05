import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { provideForRootGuard } from '@angular/router/src/router_module';
import { StoreModule } from "@ngrx/store";
import { cardReducer } from 'src/modules/card/store/card.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CardEffectsService } from 'src/modules/card/store/card.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { AppEffects } from './app.effects';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    StoreModule.forFeature('card', cardReducer),
    EffectsModule.forRoot([CardEffectsService, AppEffects]),
    HttpClientModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
