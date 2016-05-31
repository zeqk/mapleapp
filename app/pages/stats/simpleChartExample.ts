
import {Component} from 'angular2/core';
//import { CHART_DIRECTIVES,Highcharts } from 'angular2-highcharts';
declare var Highcharts: any;


Highcharts.setOptions({
    colors: ['#058DC7', '#50B432', '#ED561B']
});

@Component({
    selector: 'simple-chart-example',
    //directives: [CHART_DIRECTIVES],
    template: `
        <div id='mc-chart'></div>
    `
})
export class SimpleChartExample {
    constructor() {
        this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: Array.from(new Array(100), (x,i) => i),
            }]
        };
    }
    options: Object;
    //let mapEle = document.getElementById('map');

    
}