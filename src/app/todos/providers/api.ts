import {Provider} from '@angular/core';
import {environment} from '@environment/environment';
import {ApiService, API_URL} from '../services';

const {apiUrl} = environment;

export const apiProvider: Provider[] = [
  {provide: API_URL, useValue: apiUrl},
  ApiService,
];
