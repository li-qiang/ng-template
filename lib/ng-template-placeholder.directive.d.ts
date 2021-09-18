import { OnChanges, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { NgTemplateService } from './ng-template.service';
export declare class NgTemplatePlaceholderDirective implements OnInit, OnChanges {
    private ngTemplateService;
    private viewContainerRef;
    ngTemplatePlaceholder: string;
    model: any;
    private model$;
    constructor(ngTemplateService: NgTemplateService, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
