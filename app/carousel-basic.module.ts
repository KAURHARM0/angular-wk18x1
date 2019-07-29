import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventEmitterService } from '../providers/event-emitter.service';
import { ControlsMaterialModule } from '../material-module';
import { ReactiveFormsModule } from '@angular/forms';

import { CartValueComponent } from '../templates/cartValueCondition/cartValueCondition.component';
import { ScrollCarouselComponent } from '../scroll-carousel/scroll-carousel.component';
// import { ConditionDetailsComponent } from '../condition-details/condition-details.component';
import { ConditionListComponent } from '../conditionList-sidePanel/conditionList-sidePanel.component';
import { RuleDefinitionComponent } from '../rule-definition-content/rule-definition-content.component';
import { RuleExpressionComponent } from '../rule-expression/rule-expression.component';

import { NgbdCarouselBasic } from './carousel-basic';

@NgModule({
  imports: [BrowserModule, 
    NgbModule, 
    BrowserAnimationsModule, 
    ControlsMaterialModule,
    ReactiveFormsModule
    ],
  declarations: [NgbdCarouselBasic, 
    CartValueComponent,
    ScrollCarouselComponent, 
    // ConditionDetailsComponent, 
    ConditionListComponent, 
    RuleDefinitionComponent, 
    RuleExpressionComponent,],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports: [NgbdCarouselBasic, 
    ControlsMaterialModule
    ],
  entryComponents: [ CartValueComponent ],
  providers: [ EventEmitterService ],
  bootstrap: [ NgbdCarouselBasic ]
})
export class NgbdCarouselBasicModule {}
