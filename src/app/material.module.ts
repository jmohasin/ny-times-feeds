import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatMenuModule, MatButtonModule, MatListModule, MatIconModule } from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatMenuModule,
        MatButtonModule,
        MatListModule,
        MatIconModule
    ],
    exports: [
        MatCardModule,
        MatMenuModule,
        MatButtonModule,
        MatListModule,
        MatIconModule
    ]
})
export class MaterialModule { }
