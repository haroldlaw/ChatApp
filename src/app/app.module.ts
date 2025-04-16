import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({ projectId: "bleep-app-66b82", appId: "1:772331028364:web:3949c285123b6439da60a9", storageBucket: "bleep-app-66b82.firebasestorage.app", apiKey: "AIzaSyDty5iYZbOa7P4d8BAyKYsW9vLRLU3GEJ0", authDomain: "bleep-app-66b82.firebaseapp.com", messagingSenderId: "772331028364", measurementId: "G-P9W22J58WC" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
})
export class AppModule {}
