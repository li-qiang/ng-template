import { OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NgTemplateService } from './ng-template.service';
export declare class NgTemplateDirective<T> implements OnInit, OnDestroy {
    private templateRef;
    private ngTemplateService;
    ngTemplate: string;
    constructor(templateRef: TemplateRef<T>, ngTemplateService: NgTemplateService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
