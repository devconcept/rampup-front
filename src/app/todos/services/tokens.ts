import {InjectionToken} from '@angular/core';

export const API_URL = new InjectionToken('api.url');

/* export const API_URL = new InjectionToken('api.url', {
  providedIn: 'root',
  factory: () => 'localhost:8500',
}); */

// export const API_URL = 'localhost:8500';