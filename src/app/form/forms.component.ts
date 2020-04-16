import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
    selector   : 'forms',
    templateUrl: './forms.component.html',
    styleUrls  : ['./forms.component.scss']
})
export class FormsComponent implements OnInit, OnDestroy
{   // config: any;
    form: FormGroup;
    selected = '0';
    // Vertical Stepper
    verticalStepperStep1: FormGroup;
    verticalStepperStep2: FormGroup;
    verticalStepperStep3: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _formBuilder: FormBuilder
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
/*
        this._fuseConfigService.config = {
            colorTheme      : 'theme-default',
            layout          : {
                style    : 'vertical-layout-1',
                width    : 'fullwidth',
                navbar   : {
                    primaryBackground  : 'fuse-navy-700',
                    secondaryBackground: 'fuse-navy-900',
                    folded             : false,
                    hidden             : true,
                    position           : 'left',
                    variant            : 'vertical-style-1'
                },
                toolbar  : {
                    customBackgroundColor: false,
                    background           : 'fuse-white-500',
                    hidden               : false,
                    position             : 'below-static'
                },
                footer   : {
                    customBackgroundColor: true,
                    background           : 'fuse-navy-900',
                    hidden               : true,
                    position             : 'below-fixed'
                },
                sidepanel: {
                    hidden  : true,
                    position: 'right'
                }
            },
            customScrollbars: true
        };*/
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    { /* this._fuseConfigService.config
        .subscribe((config) => {
            this.config = config;
        });*/
        // Reactive Form
        this.form = this._formBuilder.group({
            company   : [
                {
                    value   : 'Google',
                    disabled: true
                }, Validators.required
            ],
            firstName : ['', Validators.required],
            lastName  : ['', Validators.required],
            address   : ['', Validators.required],
            address2  : ['', Validators.required],
            city      : ['', Validators.required],
            state     : ['', Validators.required],
            postalCode: ['', [Validators.required, Validators.maxLength(5)]],
            country   : ['', Validators.required]
        });

        // Vertical Stepper form stepper
        this.verticalStepperStep1 = this._formBuilder.group({
            firstName: ['', Validators.required],
            lastName : ['', Validators.required]
        });

        this.verticalStepperStep2 = this._formBuilder.group({
            address: ['', Validators.required]
        });

        this.verticalStepperStep3 = this._formBuilder.group({
            city      : ['', Validators.required],
            state     : ['', Validators.required],
            postalCode: ['', [Validators.required, Validators.maxLength(5)]]
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Finish the horizontal stepper
     */
    /**
     * Finish the vertical stepper
     */
    finishVerticalStepper(): void
    {
        alert('You have finished the vertical stepper!');
    }
}
