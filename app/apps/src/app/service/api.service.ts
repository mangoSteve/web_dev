import { Headers } from '@angular/http';

export class ApiService {
    getUrl(): string {
        return 'http://localhost:3000';
    }
    getHeaders(): Headers {
        return new Headers({ 'Content-Type': 'application/json'});
    }
}
