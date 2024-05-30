import { Routes } from '@angular/router';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { ListingPageComponent } from './listing-page/listing-page.component';

export const routes: Routes = [


    {
        path: 'details/:id',
        component: DetailPageComponent
    }
    ,
    {
        path: 'listing',
        component: ListingPageComponent
    }
    ,
    {
        path: '**',
        redirectTo: '/listing'
      }

];
