import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuWithBuilderComponent } from './demo-form-sku-with-builder/demo-form-sku-with-builder.component';
import { DemoFormWithValidationExplicitComponent } from './demo-form-with-validation-explicit/demo-form-with-validation-explicit';
import { DemoFormWithValidationShorthandComponent } from './demo-form-with-validation-shorthand/demo-form-with-validation-shorthand';
import { DemoFormWithCustomComponent } from './demo-form-with-custom-validation/demo-form-with-custom-validation';
import { DemoFormWithValidationEventsComponent } from './demo-form-with-validation-events/demo-form-with-validation-events';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent,
    DemoFormWithValidationExplicitComponent,
    DemoFormWithValidationShorthandComponent,
    DemoFormWithCustomComponent,
    DemoFormWithValidationEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }