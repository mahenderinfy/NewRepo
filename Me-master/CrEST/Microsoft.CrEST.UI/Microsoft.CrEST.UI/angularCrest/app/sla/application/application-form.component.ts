import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'sla-applicationForm',
    template: require('./application-form.component.html'),

})
export class ApplicationFormComponent {

    public route: ActivatedRoute;
    constructor(private _route: ActivatedRoute) {
        this.route = _route;


    }

    ngOnInit() {
        //called after the constructor and called  after the first ngOnChanges() 
        if (this.route.snapshot.params['id'] != null) {
            //alert(this.route.snapshot.params['id']);
        }
    }

}