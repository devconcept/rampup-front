import {Provider} from '@angular/core';
import {ApiService, API_URL} from '../services';

export const apiProvider: Provider[] = [
  {provide: API_URL, useValue: 'http://localhost:8500'},
  ApiService,
];
