import { Component, OnInit } from '@angular/core';


declare var require: any

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'extendedforms-cmp',
    templateUrl: 'extendedforms.component.html'
})

export class ExtendedFormsComponent implements OnInit{
    ngOnInit() {

        // Init Tags Input
        if($(".tagsinput").length != 0){
            $(".tagsinput").tagsinput();
        }

        //  Init Bootstrap Select Picker
        if($(".selectpicker").length != 0){
            $(".selectpicker").selectpicker({
                iconBase: "fa",
                tickIcon: "fa-check"
            });
        }

        $('.datetimepicker').datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
         });

         $('.datepicker').datetimepicker({
            format: 'MM/DD/YYYY',
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
         });

         $('.timepicker').datetimepicker({
//          format: 'H:mm',    // use this format if you want the 24hours timepicker
            format: 'h:mm A',    //use this format if you want the 12hours timpiecker with AM/PM toggle
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
         });

        var noUiSlider = require('nouislider');

        var sliderDouble = document.getElementById('sliderDouble');
        noUiSlider.create(sliderDouble, {
             start: [20, 60] ,
             connect: true,
             range: {
                 min: 0,
                 max: 100
             }
         });

        var sliderRegular = document.getElementById('sliderRegular');
        noUiSlider.create(sliderRegular, {
            start: 40,
             connect: "lower",
             range: {
                 min: 0,
                 max: 100
             }
        });
    }
}
