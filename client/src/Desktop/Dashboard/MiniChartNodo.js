







import React, { useState ,useEffect } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from "@amcharts/amcharts5/xy"
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"


const MiniChartNodo = ({ data }) => {

    const [chartId] = useState(`chart-nodo${Math.random().toString(36).substr(2, 9)}`);
    let root
    useEffect(() => {
        am5.ready(() => {

            root = am5.Root.new(`${chartId}`)
            root._logo.dispose();
            root.setThemes([am5themes_Animated.new(root)])

            // creating chart
            let chart = root.container.children.push(am5xy.XYChart.new(root, {
                panX: false,
                panY: false,
                wheelX: undefined,
                wheelY: undefined,
                pinchZoomX: false,
              }));


            // use own data instead
            let preppedData = data.slice(-15).map((item) => {
                return {
                    date: new Date(item.date).getTime(),
                    value: item.wealth
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
                  }),
                tooltip: am5.Tooltip.new(root, {})
            }));
    
  
              
            let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererY.new(root, {}),
                min: minValue, 
                max: maxValue,
            }));


            let gradient = am5.LinearGradient.new(root, {
                rotation: 90,
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
                stroke: am5.color("#646464"),
                tensionX: 5,
                tensionY: 5 
            }));

            const test = preppedData
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
    <div id={chartId} style={{ width: '100%', height: '100%' }}></div>
  )
}

export default MiniChartNodo
