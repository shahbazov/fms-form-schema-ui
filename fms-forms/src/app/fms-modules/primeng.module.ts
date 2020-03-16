import {NgModule} from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  exports: [
    TableModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    CalendarModule,
    InputSwitchModule,
    VirtualScrollerModule,
    ScrollPanelModule,
    FieldsetModule,
    CardModule,
    InputTextareaModule,
    DropdownModule,
    CheckboxModule,
    RadioButtonModule
  ]
})
export class FmsPrimengModule {

}
