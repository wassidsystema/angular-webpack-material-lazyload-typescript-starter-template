import { IComponentController, IComponentOptions } from 'angular';
import {Component} from '@angular/core';

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'tab-group-basic-example',
  templateUrl: 'tab-group-basic-example.html',
  styleUrls: ['tab-group-basic-example.css'],
})
export class ChildTwoController implements IComponentController { 
    constructor() { }

}

const childTwoComponent: IComponentOptions = {

    controller: ChildTwoController,
    template: require('./child-two.component.html') as string
};

export default childTwoComponent;


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */