

import React, { useEffect } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from "@amcharts/amcharts5/xy"
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"

const HealthLineChart = ({ data }) => {


    let root
    useEffect(() => {
        am5.ready(() => {

            root = am5.Root.new("health-line-chart")
            root._logo.dispose();
            root.setThemes([am5themes_Animated.new(root)])

            // creating chart
            let chart = root.container.children.push(am5xy.XYChart.new(root, {
                panX: false,
                panY: false,
                wheelX: undefined,
                wheelY: undefined,
                pinchZoomX: false,

                // setting zoom to false
              }));


            // create cursor
            let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
                behavior: "none"
            }));
            cursor.lineY.set("visible", false);



            // use own data instead
            let preppedData = data.slice(-30).map((item) => {
                return {
                    date: new Date(item.date).getTime(),
                    value: item.health
                };
            });
            let values = preppedData.map(item => item.value);
            let minValue = Math.min(...values);
            let maxValue = Math.max(...values);
    
            minValue = minValue > 0 ? minValue * 0.95 : 0;
            maxValue = maxValue * 1.05;




            // create axis
            let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
                baseInterval: { timeUnit: "day", count: 1 },
                renderer: am5xy.AxisRendererX.new(root, {
                    minGridDistance: 80,
                    minorGridEnabled: false,
                    pan: "zoom",
                  }),
                tooltip: am5.Tooltip.new(root, {})
            }));
    
  
              
            let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererY.new(root, {}),
                min: minValue, 
                max: maxValue,
            }));

            // xAxis.renderer.grid.template.stroke = "#ff0000";
            // yAxis.renderer.grid.template.stroke = "#ff0000";
            
            xAxis.onPrivate("selectionMin", function(value, target) {
                let start = new Date(value);
                console.log("Start date changed:", start);
            });
            
            xAxis.onPrivate("selectionMax", function(value, target) {
                let end = new Date(value);
                console.log("End date changed:", end);
            });


 
            // axis styles
            const XaxisLabelsTemplate = xAxis.get("renderer").labels.template;
            XaxisLabelsTemplate.setAll({ fill: am5.color("#FCFCFC"), stroke: am5.color(0xFFFFFF), fillOpacity: 0.5 });
  
            const YaxisLabelsTemplate = yAxis.get("renderer").labels.template;
            YaxisLabelsTemplate.setAll({ fill: am5.color("#F7F7F7"), stroke: am5.color(0xFFFFFF), fillOpacity: 0.5 });

    

            let gradient = am5.LinearGradient.new(root, {
                rotation: 90, // Adjust the rotation for the desired orientation
                stops: [
                    { color: am5.color("#E33A4E") },
                    { color: am5.color("#584063") }
                ]
            });


            // series
            let series = chart.series.push(am5xy.SmoothedXLineSeries.new(root, {
                name: "Series",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value",
                valueXField: "date",
                stroke: am5.color("#8B3E5D"),
                tensionX: 5,
                tensionY: 5 
            }));

            const test = preppedData
            console.log('test')
            console.log(test)
            series.data.setAll(test);
            
            let tooltip = am5.Tooltip.new(root, {
                getFillFromSprite: false,
                labelText: "score: {valueY}"
              });
              
              tooltip.get("background").setAll({
                fill: am5.color("#8B3E5D"),
                fillOpacity: 0.8,
                stroke: am5.color(0x000000),
                strokeOpacity: 0.8
              });
              
            series.set("tooltip", tooltip);


            // let scrollbar = chart.set("scrollbarX", am5.Scrollbar.new(root, {
            //     orientation: "horizontal"
            // }));

            series.appear(1000);
            chart.appear(1000, 100);
        })
        return () => {
            if (root) {
              root.dispose()
            }
        }
    },[data])







  return (
    <div id="health-line-chart">
        <div className="watermark-cover"></div>
    </div>
  )
}

export default HealthLineChart
