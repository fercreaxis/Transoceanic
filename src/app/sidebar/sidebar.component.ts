import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';

declare var $:any;
var sidebarTimer;
var mda: any = {
   misc: {
       movingTab: '<div class="sidebar-moving-tab"/>',
       isChild: false,
       sidebarMenuActive: '',
       movingTabInitialised: false
   }
};
@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit{
    public menuItems: any[];
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }
    animateMovingTab(){
            //console.log('call animate moving tab');
        clearTimeout(sidebarTimer);

        var $currentActive = mda.misc.sidebarMenuActive;

        $('.sidebar .nav-container .nav li').removeClass('visible');

        var $movingTab = mda.misc.movingTab;
        $movingTab.addClass('moving');

        $movingTab.css('padding-left',$currentActive.css('padding-left'));
        var button_text = $currentActive.html();

        this.setMovingTabPosition($currentActive);

        sidebarTimer = setTimeout(function(){
            $movingTab.removeClass('moving');
            $currentActive.parent().addClass('visible');
        }, 650);

        setTimeout(function(){
            $movingTab.html(button_text);
        }, 10);
    }
    setMovingTabPosition($currentActive){
        //console.log('setez moving tab position');
        $currentActive = mda.misc.sidebarMenuActive;
        var li_distance = $currentActive.parent().position().top - 10;

        if($currentActive.closest('.collapse').length != 0){
            var parent_distance = $currentActive.closest('.collapse').parent().position().top;
            li_distance = li_distance + parent_distance;
        }

        mda.misc.movingTab.css({
            'transform':'translate3d(0px,' + li_distance + 'px, 0)',
            '-webkit-transform':'translate3d(0px,' + li_distance + 'px, 0)',
            '-moz-transform':'translate3d(0px,' + li_distance + 'px, 0)',
            '-ms-transform':'translate3d(0px,' + li_distance + 'px, 0)',
            '-o-transform':'translate3d(0px,' + li_distance + 'px, 0)'
        });
    }
    setParentCollapse(){
        //console.log('la collapse imi setez pozitia pe movingtab');
        if(mda.misc.isChild == true){
            var $sidebarParent = mda.misc.sidebarMenuActive.parent().parent().parent();
            var collapseId = $sidebarParent.siblings('a').attr("href");

            $(collapseId).collapse("show");

            $(collapseId).collapse()
            .on('shown.bs.collapse', function (){
                this.setMovingTabPosition();
            })
            .on('hidden.bs.collapse', function(){
                this.setMovingTabPosition();
            });

        }
    }

    ngOnInit() {
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows){
           // if we are on windows OS we activate the perfectScrollbar function
            var $sidebar = $('.sidebar-wrapper');
            $sidebar.perfectScrollbar();
        }
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

        if (isWindows){
           // if we are on windows OS we activate the perfectScrollbar function
           $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
           $('html').addClass('perfect-scrollbar-on');
       } else {
           $('html').addClass('perfect-scrollbar-off');
       }
    }

    ngAfterViewInit(){
        this.initMovingTab();
        if(mda.misc.movingTabInitialised == false){

            mda.misc.movingTabInitialised = true;
        }

        $('.sidebar .nav-container .nav > li > a:not([data-toggle="collapse"])').click(function(){
            ////console.log('click pe:', this);
            mda.misc.sidebarMenuActive = $(this);
            var $parent = $(this).parent();

            if(mda.misc.sidebarMenuActive.closest('.collapse').length == 0){
                mda.misc.isChild = false;
            }

            // we call the animation of the moving tab
            clearTimeout(sidebarTimer);

            var $currentActive = mda.misc.sidebarMenuActive;

            $('.sidebar .nav-container .nav li').removeClass('visible');

            var $movingTab = mda.misc.movingTab;
            $movingTab.addClass('moving');

            $movingTab.css('padding-left',$currentActive.css('padding-left'));
            var button_text = $currentActive.html();

            var $currentActive = mda.misc.sidebarMenuActive;
            var li_distance = $currentActive.parent().position().top - 10;

            if($currentActive.closest('.collapse').length != 0){
                var parent_distance = $currentActive.closest('.collapse').parent().position().top;
                li_distance = li_distance + parent_distance;
            }

            mda.misc.movingTab.css({
                'transform':'translate3d(0px,' + li_distance + 'px, 0)',
                '-webkit-transform':'translate3d(0px,' + li_distance + 'px, 0)',
                '-moz-transform':'translate3d(0px,' + li_distance + 'px, 0)',
                '-ms-transform':'translate3d(0px,' + li_distance + 'px, 0)',
                '-o-transform':'translate3d(0px,' + li_distance + 'px, 0)'
            });

            sidebarTimer = setTimeout(function(){
                $movingTab.removeClass('moving');
                $currentActive.parent().addClass('visible');
            }, 650);

            setTimeout(function(){
                $movingTab.html(button_text);
            }, 10);
        });
    }

    public initMovingTab(){
        //console.log('fac init la moving tab');

        mda.misc.movingTab = $(mda.misc.movingTab);

        mda.misc.sidebarMenuActive = $('li.active > a');

        //console.log('mda.misc.sidebarMenuActive', mda.misc.sidebarMenuActive);

        if(mda.misc.sidebarMenuActive.length != 0){
            this.setMovingTabPosition(mda.misc.sidebarMenuActive);
            //console.log('sunt in li simplu');
        } else {
            mda.misc.sidebarMenuActive = $('.sidebar .nav-container .nav > li.active .collapse li.active > a');
            mda.misc.isChild = true;
            this.setParentCollapse();
            //console.log('sunt in li cu collapse');
        }

        //console.log('la init Menu active:', mda.misc.sidebarMenuActive);

        mda.misc.sidebarMenuActive.parent().addClass('visible');

        $('.sidebar .nav-container').append(mda.misc.movingTab);

        if (window.history && window.history.pushState) {
            $(window).on('popstate', function() {

                setTimeout(function(){
                    mda.misc.sidebarMenuActive = $('.sidebar .nav-container .nav li.active a:not([data-toggle="collapse"])');

                    if(mda.misc.isChild == true){
                        this.setParentCollapse();
                    }
                    clearTimeout(sidebarTimer);

                    var $currentActive = mda.misc.sidebarMenuActive;

                    $('.sidebar .nav-container .nav li').removeClass('visible');

                    var $movingTab = mda.misc.movingTab;
                    $movingTab.addClass('moving');

                    $movingTab.css('padding-left',$currentActive.css('padding-left'));
                    var button_text = $currentActive.html();

                    this.setMovingTabPosition($currentActive);

                    sidebarTimer = setTimeout(function(){
                        $movingTab.removeClass('moving');
                        $currentActive.parent().addClass('visible');
                    }, 650);

                    setTimeout(function(){
                        $movingTab.html(button_text);
                    }, 10);
                },10);

            });
        }

        $('.sidebar .nav .collapse').on('hidden.bs.collapse', function () {
            //console.log('s-a terminta de inchis collapse');
            var $currentActive = mda.misc.sidebarMenuActive;
            ////console.log($currentActive.parent().position().top - 10)

            //console.log('current active:', $currentActive);
            //console.log('parinte la current:', $currentActive.parent());
            var li_distance = $currentActive.parent().position().top - 10;

            if($currentActive.closest('.collapse').length != 0){
                var parent_distance = $currentActive.closest('.collapse').parent().position().top;
                li_distance = li_distance + parent_distance;
            }

            mda.misc.movingTab.css({
                'transform':'translate3d(0px,' + li_distance + 'px, 0)',
                '-webkit-transform':'translate3d(0px,' + li_distance + 'px, 0)',
                '-moz-transform':'translate3d(0px,' + li_distance + 'px, 0)',
                '-ms-transform':'translate3d(0px,' + li_distance + 'px, 0)',
                '-o-transform':'translate3d(0px,' + li_distance + 'px, 0)'
            });
        });

        $('.sidebar .nav .collapse').on('shown.bs.collapse', function () {
            //console.log('am deschis collapse');
            var $currentActive = mda.misc.sidebarMenuActive;
            // //console.log($currentActive)

            //console.log('current active:', $currentActive);
            //console.log('parinte la current:', $currentActive.parent());

            var li_distance = $currentActive.parent().position().top - 10;

            if($currentActive.closest('.collapse').length != 0){
                var parent_distance = $currentActive.closest('.collapse').parent().position().top;
                li_distance = li_distance + parent_distance;
            }

            mda.misc.movingTab.css({
                'transform':'translate3d(0px,' + li_distance + 'px, 0)',
                '-webkit-transform':'translate3d(0px,' + li_distance + 'px, 0)',
                '-moz-transform':'translate3d(0px,' + li_distance + 'px, 0)',
                '-ms-transform':'translate3d(0px,' + li_distance + 'px, 0)',
                '-o-transform':'translate3d(0px,' + li_distance + 'px, 0)'
            });
        });
    }


}
