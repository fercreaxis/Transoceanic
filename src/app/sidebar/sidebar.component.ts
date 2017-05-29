import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';

declare var $:any;
var sidebarTimer;
var mda: any = {
   misc: {
       movingTab: '<div class="sidebar-moving-tab"/>',
       isChild: false,
       sidebarMenuActive: ''
   }
};
@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit, AfterViewInit {
    public menuItems: any[];
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }
    animateMovingTab(){
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

        mda.misc.movingTab = $(mda.misc.movingTab);

        mda.misc.sidebarMenuActive = $('.sidebar .nav-container > .nav > li.active > a:not([data-toggle="collapse"]');

        if(mda.misc.sidebarMenuActive.length != 0){
            console.log('if')
            this.setMovingTabPosition(mda.misc.sidebarMenuActive);
        } else {
            console.log('else')

            mda.misc.sidebarMenuActive = $('.sidebar .nav-container .nav > li.active .collapse li.active > a');
            mda.misc.isChild = true;
            console.log(mda.misc.sidebarMenuActive)
            this.setParentCollapse();
        }

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
            var $currentActive = mda.misc.sidebarMenuActive;
            console.log($currentActive.parent().position().top - 10)
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
            var $currentActive = mda.misc.sidebarMenuActive;
            console.log($currentActive)
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
    ngAfterViewInit(){
        $('.sidebar .nav-container .nav > li > a:not([data-toggle="collapse"])').click(function(){
            console.log('click');
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

}
