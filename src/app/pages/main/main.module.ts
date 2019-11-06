import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {LeftControlComponent} from './left-control/left-control.component';
import {ListComponent} from './left-control/list/list.component';


@NgModule({
  declarations: [MainComponent, LeftControlComponent, ListComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgZorroAntdModule
  ]
})
export class MainModule {
}
