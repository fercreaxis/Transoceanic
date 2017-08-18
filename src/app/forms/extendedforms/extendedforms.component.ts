import { Component, OnInit, ElementRef } from '@angular/core';
import { DateAdapter } from '@angular/material';


declare const require: any;

declare const $: any;

@Component({
    selector: 'app-extendedforms-cmp',
    templateUrl: 'extendedforms.component.html',
    styles: [`md-calendar {
      width: 300px;
  }`]
})

export class ExtendedFormsComponent implements OnInit {
    simpleSlider = 40;
    doubleSlider = [20, 60];
    regularItems = ['Pizza', 'Pasta', 'Parmesan'];
    touch: boolean;
    selectedValue: string;
    currentPokemon: string[];
    pokemonTheme = 'primary';
    pokemon = [
      {value: 'bulbasaur-0', viewValue: 'Bulbasaur'},
      {value: 'charizard-1', viewValue: 'Charizard'},
      {value: 'squirtle-2', viewValue: 'Squirtle'},
      {value: 'pikachu-3', viewValue: 'Pikachu'},
      {value: 'eevee-4', viewValue: 'Eevee'},
      {value: 'ditto-5', viewValue: 'Ditto'},
      {value: 'psyduck-6', viewValue: 'Psyduck'},
    ];

    ngOnInit() {}
    myFunc(val: any) {
    console.log('value is changed to ' + val);
  }
}
