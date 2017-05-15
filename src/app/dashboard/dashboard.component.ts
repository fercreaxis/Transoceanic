import { Component, OnInit } from '@angular/core';
import { TableData } from '../lbd/lbd-table/lbd-table.component';

import * as Chartist from 'chartist';

declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit{
  // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
  public tableData: TableData;

  // constructor(private navbarTitleService: NavbarTitleService) { }
  public ngOnInit() {
      this.tableData = {
          headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
          dataRows: [
              ['US', 'USA', '2.920	', '53.23%'],
              ['DE', 'Germany', '1.300', '20.43%'],
              ['AU', 'Australia', '760', '10.35%'],
              ['GB', 'United Kingdom	', '690', '7.87%'],
              ['RO', 'Romania', '600', '5.94%'],
              ['BR', 'Brasil', '550', '4.34%']
          ]
       };
      /* ----------==========     Daily Sales Chart initialization    ==========---------- */

      var dataDailySalesChart = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };

     var optionsDailySalesChart = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      var dataCompletedTasksChart = {
          labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
          ]
      };

      var optionsCompletedTasksChart = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

     new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var dataWebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      var optionsWebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions:any = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      new Chartist.Bar('#websiteViewsChart', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);

      var mapData = {
           "AU": 760,
           "BR": 550,
           "CA": 120,
           "DE": 1300,
           "FR": 540,
           "GB": 690,
           "GE": 200,
           "IN": 200,
           "RO": 600,
           "RU": 300,
           "US": 2920,
       };
          $('#worldMap').vectorMap({
              map: 'world_mill_en',
              backgroundColor: "transparent",
              zoomOnScroll: false,
              regionStyle: {
                  initial: {
                      fill: '#e4e4e4',
                      "fill-opacity": 0.9,
                      stroke: 'none',
                      "stroke-width": 0,
                      "stroke-opacity": 0
                  }
              },

              series: {
                  regions: [{
                      values: mapData,
                      scale: ["#AAAAAA","#444444"],
                      normalizeFunction: 'polynomial'
                  }]
              },
          });

   }
}
