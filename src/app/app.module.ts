import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {postReducer} from './ngRX/PostStateReducers';
import {PostStateEffects} from './ngRX/PostStateEffects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({postData: postReducer}),
    // postData have to match AppStateWrapper's field name for AppState
    // same for if using forFeature, you have to put the correct string value that matches the field name
    /*
    * export interface PostAppStateWrapper {
       postData: PostAppState;
      }
    * */
    /*StoreModule.forRoot({}),*/
    /*StoreModule.forFeature('postData', postReducer),*/
    EffectsModule.forRoot([PostStateEffects]),
    /*EffectsModule.forRoot([]),
    EffectsModule.forFeature([PostStateEffects]),*/
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
