import {Injectable} from '@angular/core';
import {ErrorObserver} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  createErrorHandler(handler: (err: any) => void): ErrorObserver<any> {
    return {
      error: (error: any) => handler(error),
    };
  }
}
