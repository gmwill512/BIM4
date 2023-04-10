import { Store } from './Context';
import { useState, useEffect, useContext, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

const LineChart = () => {
  const { Button1, setButton1, Button2, setButton2, Button3, setButton3, Button4, setButton4, Button5, setButton5 } = useContext(Store)

  const chartRef = useRef(null);

  useEffect(() => {
    // Set theme
    am4core.useTheme(am4themes_animated);
    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.XYChart);
    chart.logo.disabled = true

    // Set data
    const rawData = [
      { group: 'top', xValue: 0, yValue: 0 },
      { group: 'top', xValue: 0.071, yValue: -8.17 },
      { group: 'top', xValue: 0.268, yValue: -8.05 },
      { group: 'top', xValue: 0.5, yValue: -8.74 },
      { group: 'top', xValue: 1, yValue: -8.67 },
      { group: 'top', xValue: 1.5, yValue: -8.45 },
      { group: 'top', xValue: 2, yValue: -8.24 },
      { group: 'top', xValue: 3, yValue: -8.41 },
      { group: 'top', xValue: 4, yValue: -8.24 },
      { group: 'top', xValue: 5, yValue: -7.43 },
      { group: 'top', xValue: 6, yValue: -8.48 },
      { group: 'top', xValue: 7.5, yValue: -8.15 },
      { group: 'top', xValue: 9, yValue: -8.46 },
      { group: 'top', xValue: 10.5, yValue: -8.48 },
      { group: 'top', xValue: 12, yValue: -8.35 },
      { group: 'top', xValue: 13.5, yValue: -7.14 },
      { group: 'top', xValue: 15, yValue: -6.81 },
      { group: 'top', xValue: 16.5, yValue: -7.98 },
      { group: 'top', xValue: 18, yValue: -8.53 },
      { group: 'top', xValue: 19.5, yValue: -8.12 },
      { group: 'top', xValue: 21, yValue: -8.13 },
      { group: 'top', xValue: 22.5, yValue: -7.9 },
      { group: 'top', xValue: 24, yValue: -8.16 },
      { group: 'bim6', xValue: 0, yValue: 0 },
      { group: 'bim6', xValue: 0.071, yValue: -9.88 },
      { group: 'bim6', xValue: 0.268, yValue: -6.33 },
      { group: 'bim6', xValue: 0.5, yValue: -7.5 },
      { group: 'bim6', xValue: 1, yValue: -7.09 },
      { group: 'bim6', xValue: 1.5, yValue: -7.53 },
      { group: 'bim6', xValue: 2, yValue: -7.03 },
      { group: 'bim6', xValue: 3, yValue: -6.53 },
      { group: 'bim6', xValue: 4, yValue: -5.73 },
      { group: 'bim6', xValue: 5, yValue: -5.18 },
      { group: 'bim6', xValue: 6, yValue: -6.81 },
      { group: 'bim6', xValue: 7.5, yValue: -6.04 },
      { group: 'bim6', xValue: 9, yValue: -6.36 },
      { group: 'bim6', xValue: 10.5, yValue: -6.38 },
      { group: 'bim6', xValue: 12, yValue: -5.38 },
      { group: 'bim6', xValue: 13.5, yValue: -5.94 },
      { group: 'bim6', xValue: 15, yValue: -5.78 },
      { group: 'bim6', xValue: 16.5, yValue: -8.5 },
      { group: 'bim6', xValue: 18, yValue: -6.93 },
      { group: 'bim6', xValue: 19.5, yValue: -6.42 },
      { group: 'bim6', xValue: 21, yValue: -6.6 },
      { group: 'bim6', xValue: 22.5, yValue: -6.1 },
      { group: 'bim6', xValue: 24, yValue: -5.7 },
      { group: 'bim10', xValue: 0, yValue: 0 },
      { group: 'bim10', xValue: 0.071, yValue: -9.71 },
      { group: 'bim10', xValue: 0.268, yValue: -8.07 },
      { group: 'bim10', xValue: 0.5, yValue: -7.93 },
      { group: 'bim10', xValue: 1, yValue: -7.18 },
      { group: 'bim10', xValue: 1.5, yValue: -7.14 },
      { group: 'bim10', xValue: 2, yValue: -7.63 },
      { group: 'bim10', xValue: 3, yValue: -6.82 },
      { group: 'bim10', xValue: 4, yValue: -4.58 },
      { group: 'bim10', xValue: 5, yValue: -4.63 },
      { group: 'bim10', xValue: 6, yValue: -5.38 },
      { group: 'bim10', xValue: 7.5, yValue: -4.5 },
      { group: 'bim10', xValue: 9, yValue: -6.55 },
      { group: 'bim10', xValue: 10.5, yValue: -6 },
      { group: 'bim10', xValue: 12, yValue: -6 },
      { group: 'bim10', xValue: 13.5, yValue: -7.67 },
      { group: 'bim10', xValue: 15, yValue: -5.8 },
      { group: 'bim10', xValue: 16.5, yValue: -7.13 },
      { group: 'bim10', xValue: 18, yValue: -7.7 },
      { group: 'bim10', xValue: 19.5, yValue: -8.38 },
      { group: 'bim10', xValue: 21, yValue: -6.9 },
      { group: 'bim10', xValue: 22.5, yValue: -7.88 },
      { group: 'bim10', xValue: 24, yValue: -7.4 },
      { group: 'bim15', xValue: 0.071, yValue: -9.64 },
      { group: 'bim15', xValue: 0.268, yValue: -8.43 },
      { group: 'bim15', xValue: 0.5, yValue: -9.1 },
      { group: 'bim15', xValue: 1, yValue: -7.8 },
      { group: 'bim15', xValue: 1.5, yValue: -8.98 },
      { group: 'bim15', xValue: 2, yValue: -8.74 },
      { group: 'bim15', xValue: 3, yValue: -7.02 },
      { group: 'bim15', xValue: 4, yValue: -5.02 },
      { group: 'bim15', xValue: 5, yValue: -5.6 },
      { group: 'bim15', xValue: 6, yValue: -6.5 },
      { group: 'bim15', xValue: 7.5, yValue: -5.85 },
      { group: 'bim15', xValue: 9, yValue: -5.9 },
      { group: 'bim15', xValue: 10.5, yValue: -6.21 },
      { group: 'bim15', xValue: 12, yValue: -5.64 },
      { group: 'bim15', xValue: 13.5, yValue: -4.93 },
      { group: 'bim15', xValue: 15, yValue: -6 },
      { group: 'bim15', xValue: 16.5, yValue: -5.93 },
      { group: 'bim15', xValue: 18, yValue: -6.92 },
      { group: 'bim15', xValue: 19.5, yValue: -6.4 },
      { group: 'bim15', xValue: 21, yValue: -6.6 },
      { group: 'bim15', xValue: 22.5, yValue: -7.7 },
      { group: 'bim20', xValue: 0, yValue: 0 },
  { group: 'bim20', xValue: -9.88, yValue: -14 },
  { group: 'bim20', xValue: -6.33, yValue: -9.67 },
  { group: 'bim20', xValue: -7.5, yValue: -10.71 },
  { group: 'bim20', xValue: -7.09, yValue: -8.83 },
  { group: 'bim20', xValue: -7.53, yValue: -8.57 },
  { group: 'bim20', xValue: -7.03, yValue: -8.46 },
  { group: 'bim20', xValue: -6.53, yValue: -7.92 },
  { group: 'bim20', xValue: -5.73, yValue: -6.91 },
  { group: 'bim20', xValue: -5.18, yValue: -5.2 },
  { group: 'bim20', xValue: -6.81, yValue: -5.65 },
  { group: 'bim20', xValue: -6.04, yValue: -6 },
  { group: 'bim20', xValue: -6.36, yValue: -6.78 },
  { group: 'bim20', xValue: -6.38, yValue: -7.31 },
  { group: 'bim20', xValue: -5.38, yValue: -9 },
  { group: 'bim20', xValue: -5.94, yValue: -7.42 },
  { group: 'bim20', xValue: -5.78, yValue: -5.9 },
  { group: 'bim20', xValue: -8.5, yValue: -6.5 },
  { group: 'bim20', xValue: -6.93, yValue: -6 },
  { group: 'bim20', xValue: -6.42, yValue: -7.2 },
  { group: 'bim20', xValue: -6.6, yValue: -7.2 },
  { group: 'bim20', xValue: -6.1, yValue: -7.6 },
  { group: 'zero', xValue: 0, yValue: 0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0, yValue: 0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0},
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0},
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0, yValue: 0 },
  { group: 'zero', xValue: 0,  yValue:0},
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0, yValue: 0 },
  { group: 'zero', xValue: 0, yValue: 0 }
    ];

    const topData = rawData.filter(item => item.group === 'top');
    const zeroData = rawData.filter(item => item.group === 'zero');
    const bim6Data = rawData.filter(item => item.group === 'bim6');
    const bim10Data = rawData.filter(item => item.group === 'bim10');
    const bim15Data = rawData.filter(item => item.group === 'bim15');
    const bim20Data = rawData.filter(item => item.group === 'bim20');


    // Create x-axis
    const xAxis = chart.xAxes.push(new am4charts.ValueAxis());
    xAxis.min = -10;
    xAxis.max = 15;
    xAxis.renderer.labels.template.fontSize = 14;
    xAxis.renderer.minGridDistance = 25;
    xAxis.renderer.opposite = true;
    xAxis.title.text = 'Time';
    xAxis.renderer.grid.template.opacity = .2;
    xAxis.renderer.labels.template.adapter.add("text", function (text) {
      if (text === "0") {
        return "BL";
      } else if (text === "1") {
        return "W4";
      } else if (text === "3") {
        return "W12";
      } else if (text === "6") {
        return "M6";
      } else if (text === "12") {
        return "M12";
      } else if (text === "18") {
        return "M18";
      } else if (text === "24") {
        return "M24";
      }
      return "|";
    });


    const yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = -15;
    yAxis.max = .2;
    yAxis.strictMinMax = true;
    yAxis.renderer.labels.template.fontSize = 14;
    yAxis.renderer.minGridDistance = 1;
    yAxis.title.text = 'Mean change from baseline IOP (mm hg)';

    // Create series
    const series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = 'yValue';
    series1.dataFields.valueX = 'xValue';
    series1.data = Button1 ? topData : zeroData
    series1.strokeWidth = 2;
    series1.stroke = am4core.color('black')

    const series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = 'yValue';
    series2.dataFields.valueX = 'xValue';
    series2.data = Button2 ? bim6Data : zeroData
    series2.strokeWidth = 2;
    series2.stroke = am4core.color('blue')
    
    const series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = 'yValue';
    series3.dataFields.valueX = 'xValue';
    series3.data = Button3 ? bim10Data : zeroData
    series3.strokeWidth = 2;
    series3.stroke = am4core.color('green')
    
    const series4 = chart.series.push(new am4charts.LineSeries());
    series4.dataFields.valueY = 'yValue';
    series4.dataFields.valueX = 'xValue';
    series4.data = Button4 ? bim15Data : zeroData
    series4.strokeWidth = 2;
    series4.stroke = am4core.color('purple')

    const series5 = chart.series.push(new am4charts.LineSeries());
    series5.dataFields.valueY = 'yValue';
    series5.dataFields.valueX = 'xValue';
    series5.data = Button5 ? bim20Data : zeroData
    series5.strokeWidth = 2;
    series5.stroke = am4core.color('orange')

  
   

    // Add bullets to each data point
    const bullet1 = series1.bullets.push(new am4charts.CircleBullet());
    bullet1.fill = am4core.color('black')
    bullet1.stroke = am4core.color('black') 
    bullet1.strokeWidth = 2;
    bullet1.circle.radius = 3;

    const bullet2 = series2.bullets.push(new am4charts.CircleBullet());
    bullet2.fill = am4core.color('blue')
    bullet2.stroke = am4core.color('blue') 
    bullet2.strokeWidth = 2;
    bullet2.circle.radius = 3;

    const bullet3 = series3.bullets.push(new am4charts.CircleBullet());
    bullet3.fill = am4core.color('green')
    bullet3.stroke = am4core.color('green') 
    bullet3.strokeWidth = 2;
    bullet3.circle.radius = 3;

    const bullet4 = series4.bullets.push(new am4charts.CircleBullet());
    bullet4.fill = am4core.color('purple')
    bullet4.stroke = am4core.color('purple') 
    bullet4.strokeWidth = 2;
    bullet4.circle.radius = 3;

    const bullet5 = series5.bullets.push(new am4charts.CircleBullet());
    bullet5.fill = am4core.color('orange')
    bullet5.stroke = am4core.color('orange') 
    bullet5.strokeWidth = 2;
    bullet5.circle.radius = 3;
 

    // Set chart instance to the ref
    chartRef.current = chart;

    // Clean up the chart when the

    return () => {
      chart.dispose();
    };
  }, [Button1, setButton1, Button2, setButton2, Button3, setButton3, Button4, setButton4, Button5, setButton5]);

  return <div id="chartdiv" style={{ width: '1500px', height: '500px' }} />;
};

export default LineChart;