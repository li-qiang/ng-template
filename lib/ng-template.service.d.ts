import { TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
export declare class NgTemplateService {
    templates$: BehaviorSubject<{}>;
    constructor();
    register(id: string, templateRef: TemplateRef<any>): void;
    unregister(id: string): void;
    get(id: string): Observable<TemplateRef<any>>;
}
