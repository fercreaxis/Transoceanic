import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavItem, NavItemType } from '../../md/md.module';
import { Subscription } from 'rxjs/Subscription';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import 'rxjs/add/operator/filter';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

declare const $: any;
const mda: any = {
   misc: {
       movingTab: '<div class="sidebar-moving-tab"/>',
       isChild: false,
       sidebarMenuActive: '',
       movingTabInitialised: false
   }
};
const md: any = {
    misc: {
        navbar_menu_visible: 0,
        active_collapse: true,
        disabled_collapse_init: 0,
    }
};
@Component({
  selector: 'app-layout',
  templateUrl: './admin-layout.component.html'
})

export class AdminLayoutComponent implements OnInit {
    public navItems: NavItem[];
    private _router: Subscription;
    url: string;
    location: Location;
    @ViewChild('sidebar') sidebar;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;
    constructor( private router: Router, location: Location ) {
      this.location = location;
    }
    ngOnInit() {
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
          this.navbar.sidebarClose();
        });
        const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
           // if we are on windows OS we activate the perfectScrollbar function
            const $main_panel = $('.main-panel');
            $main_panel.perfectScrollbar();
        }
        this.navItems = [
          { type: NavItemType.NavbarLeft, title: 'Dashboard', iconClass: 'fa fa-dashboard' },

          {
            type: NavItemType.NavbarRight,
            title: '',
            iconClass: 'fa fa-bell-o',
            numNotifications: 5,
            dropdownItems: [
              { title: 'Notification 1' },
              { title: 'Notification 2' },
              { title: 'Notification 3' },
              { title: 'Notification 4' },
              { title: 'Another Notification' }
            ]
          },
          {
            type: NavItemType.NavbarRight,
            title: '',
            iconClass: 'fa fa-list',

            dropdownItems: [
              { iconClass: 'pe-7s-mail', title: 'Messages' },
              { iconClass: 'pe-7s-help1', title: 'Help Center' },
              { iconClass: 'pe-7s-tools', title: 'Settings' },
               'separator',
              { iconClass: 'pe-7s-lock', title: 'Lock Screen' },
              { iconClass: 'pe-7s-close-circle', title: 'Log Out' }
            ]
          },
          { type: NavItemType.NavbarLeft, title: 'Search', iconClass: 'fa fa-search' },

          { type: NavItemType.NavbarLeft, title: 'Account' },
          {
            type: NavItemType.NavbarLeft,
            title: 'Dropdown',
            dropdownItems: [
              { title: 'Action' },
              { title: 'Another action' },
              { title: 'Something' },
              { title: 'Another action' },
              { title: 'Something' },
              'separator',
              { title: 'Separated link' },
            ]
          },
          { type: NavItemType.NavbarLeft, title: 'Log out' }
        ];

        this.initFixedPluginDemo();

    }
    public isMap() {
        if (this.location.prepareExternalUrl(this.location.path()) === '/maps/fullscreen') {
            return true;
        } else {
            return false;
        }
    }

    public initFixedPluginDemo() {
        // fixed plugin
        const $sidebar = $('.sidebar');
        const $sidebar_img_container = $sidebar.find('.sidebar-background');
        //
        const $full_page = $('.full-page');
        //
        const $sidebar_responsive = $('body > .navbar-collapse');
        const window_width = $(window).width();

        const fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();

        if ( window_width > 767 && fixed_plugin_open === 'Dashboard' ) {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }

        }

        $('.fixed-plugin a').click(function(event) {
          // Alex: if we click on switch, stop propagation of the event,
          // so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                } else if (window.event) {
                   window.event.cancelBubble = true;
                }
            }
        });

        $('.fixed-plugin .active-color span').click(function() {
            const $full_page_background = $('.full-page-background');

            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            const new_color = $(this).data('color');

            if ($sidebar.length !== 0) {
                $sidebar.attr('data-active-color', new_color);
            }

            if ($full_page.length !== 0) {
                $full_page.attr('filter-color', new_color);
            }

            if ($sidebar_responsive.length !== 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });

        $('.fixed-plugin .background-color span').click(function() {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            const new_color = $(this).data('color');

            if ($sidebar.length !== 0) {
                $sidebar.attr('data-background-color', new_color);
            }
        });

        $('.fixed-plugin .img-holder').click(function() {
            const $full_page_background = $('.full-page-background');

            $(this).parent('li').siblings().removeClass('active');
            $(this).parent('li').addClass('active');

            let new_image = $(this).find('img').attr('src');

            if ( $sidebar_img_container.length !== 0 && $('.switch-sidebar-image input:checked').length !== 0 ) {
                $sidebar_img_container.fadeOut('fast', function() {
                   $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                   $sidebar_img_container.fadeIn('fast');
                });
            }

            if ($full_page_background.length !== 0 && $('.switch-sidebar-image input:checked').length !== 0 ) {
                const new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

                $full_page_background.fadeOut('fast', function(){
                   $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
                   $full_page_background.fadeIn('fast');
                });
            }

            if ( $('.switch-sidebar-image input:checked').length === 0 ) {
                new_image = $('.fixed-plugin li.active .img-holder').find('img').attr('src');
                const new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

                $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
            }

            if ($sidebar_responsive.length !== 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });

        $('.switch-sidebar-image input').change(function() {
            const $full_page_background = $('.full-page-background');
            const $input = $(this);

            if ($input.is(':checked')) {
                if ($sidebar_img_container.length !== 0) {
                    $sidebar_img_container.fadeIn('fast');
                    $sidebar.attr('data-image', '#');
                }

                if ($full_page_background.length !== 0) {
                    $full_page_background.fadeIn('fast');
                    $full_page.attr('data-image', '#');
                }

                const background_image = true;
            } else {
                if ($sidebar_img_container.length !== 0) {
                    $sidebar.removeAttr('data-image');
                    $sidebar_img_container.fadeOut('fast');
                }

                if ($full_page_background.length !== 0) {
                    $full_page.removeAttr('data-image', '#');
                    $full_page_background.fadeOut('fast');
                }

                const background_image = false;
            }
        });

        $('.switch-sidebar-mini input').change(function(){
            const $body = $('body');

            const $input = $(this);

            if (md.misc.sidebar_mini_active === true) {
                $('body').removeClass('sidebar-mini');
                md.misc.sidebar_mini_active = false;

            } else {
                setTimeout(function(){
                    $('body').addClass('sidebar-mini');

                    $('.sidebar .collapse').css('height', 'auto');
                    md.misc.sidebar_mini_active = true;
                }, 300);
            }

            // we simulate the window Resize so the charts will get updated in realtime.
            const simulateWindowResize = setInterval(function(){
                window.dispatchEvent(new Event('resize'));
            }, 180);

            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function(){
                clearInterval(simulateWindowResize);
            }, 1000);

        });
    }
}
