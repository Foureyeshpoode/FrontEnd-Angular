import { bootstrapApplication } from '@angular/platform-browser';
<<<<<<< Updated upstream
import { appConfig } from './app/app.config';
=======
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { IonicStorageModule } from '@ionic/storage-angular';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { routes } from './app/app.routes';
>>>>>>> Stashed changes
import { AppComponent } from './app/app.component';
import { provideServiceWorker } from '@angular/service-worker';

<<<<<<< Updated upstream
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
=======
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    importProvidersFrom(IonicStorageModule.forRoot()), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })
  ],
});
>>>>>>> Stashed changes
