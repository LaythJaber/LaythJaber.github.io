import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FuseSharedModule } from '@fuse/shared.module';

import { FormsComponent } from '../form/forms.component';

const routes: Routes = [
    {
        path     : '',
        component: FormsComponent
    }
];

@NgModule({
    declarations: [
        FormsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        MatTooltipModule,
        FuseSharedModule,
    ]
})
export class UIFormsModule
{
}
