import { Component, AfterViewInit, OnChanges, OnInit, HostListener, ElementRef } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-layout',
    templateUrl: './documentation.component.html',
    styleUrls: ['./documentation.component.css']
})

export class DocumentationComponent implements OnInit {
    date: Date = new Date();

    private toggleButton;
    private sidebarVisible: boolean;
    private transparent: boolean = true;
    private mobile_menu_visible: number = 0;
    private bootstrap_nav_initialized: boolean = false;

    constructor(private element : ElementRef) {
        this.sidebarVisible = false;
    }

    ngOnInit(){
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        // if(!this.bootstrap_nav_initialized){
        //     var $navbar = $('nav').find('.navbar-collapse').first().clone(true);
        //
        //     var nav_content = '';
        //     var mobile_menu_content = '';
        //
        //     //add the content from the regular header to the mobile menu
        //     $navbar.children('ul').each(function(){
        //         var content_buff = $(this).html();
        //         nav_content = nav_content + content_buff;
        //     });
        //
        //     nav_content = '<ul class="nav nav-mobile-menu">' + nav_content + '</ul>';
        //
        //     $navbar.html(nav_content);
        //     $navbar.addClass('bootstrap-navbar');
        //
        //     // append it to the body, so it will come from the right side of the screen
        //     $('body').append($navbar);
        //
        //     var $toggle = $('.navbar-toggle');
        //
        //     $navbar.find('a').removeClass('btn btn-round btn-default');
        //     $navbar.find('button').removeClass('btn-round btn-fill btn-info btn-primary btn-success btn-danger btn-warning btn-neutral');
        //     $navbar.find('button').addClass('btn-simple btn-block');
        //
        //     $toggle.click(function (){
        //         if(this.mobile_menu_visible == 1) {
        //             $('html').removeClass('nav-open');
        //
        //             $('.close-layer').remove();
        //             setTimeout(function(){
        //                 $toggle.removeClass('toggled');
        //             }, 400);
        //
        //             this.mobile_menu_visible = 0;
        //         } else {
        //             setTimeout(function(){
        //                 $toggle.addClass('toggled');
        //             }, 430);
        //
        //             var $layer = $('<div class="close-layer"></div>');
        //             $layer.appendTo(".wrapper-full-page");
        //
        //             setTimeout(function(){
        //                 $layer.addClass('visible');
        //             }, 100);
        //
        //
        //             $layer.click(function() {
        //                 $('html').removeClass('nav-open');
        //                 this.mobile_menu_visible = 0;
        //
        //                 $layer.removeClass('visible');
        //
        //                  setTimeout(function(){
        //                     $layer.remove();
        //                     $toggle.removeClass('toggled');
        //
        //                  }, 400);
        //             });
        //
        //             $('html').addClass('nav-open');
        //             this.mobile_menu_visible = 1;
        //
        //         }
        //
        //     });
        //     this.bootstrap_nav_initialized = true;
        // }
    }
    @HostListener('document:scroll', ['$event'])

    onScroll(event) {
        if($(document).scrollTop() > 381 ) {
            if(this.transparent) {
                this.transparent = false;
                $('.navbar-color-on-scroll').removeClass('navbar-transparent');
                $('.navbar-title').removeClass('hidden');
            }
        } else {
            if( !this.transparent ) {
                this.transparent = true;
                $('.navbar-color-on-scroll').addClass('navbar-transparent');
                $('.navbar-title').addClass('hidden');
            }
        }
    }

    sidebarOpen(){
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        },500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    }

    sidebarClose(){
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    }

    sidebarToggle(){
        // var toggleButton = this.toggleButton;
        // var body = document.getElementsByTagName('body')[0];
        if(this.sidebarVisible == false){
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    }
}
