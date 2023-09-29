

import React, { useEffect } from 'react'
import * as am5 from "@amcharts/amcharts5"
import * as am5xy from "@amcharts/amcharts5/xy"
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"

const AmLinesChart = () => {

  let root

    useEffect(() => {
        am5.ready(() => {

            root = am5.Root.new("chart-amlines")
            root.setThemes([am5themes_Animated.new(root)])

            let chart = root.container.children.push(am5xy.XYChart.new(root, {
                panX: true,
                panY: true,
                wheelX: "panX",
                wheelY: "zoomX",
                pinchZoomX:true
              }))


            // cursor
            let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
                behavior: "none"
            }));
            cursor.lineY.set("visible", false);


            // random data
            var date = new Date();
            date.setHours(0, 0, 0, 0);
            var value = 100;

            const generateData = () => {
                value = Math.round((Math.random() * 10 - 5) + value);
                am5.time.add(date, "day", 1);
                return {
                  date: date.getTime(),
                  value: value
                }
            }


            const generateDatas = (count) => {
                var data = [];
                for (var i = 0; i < count; ++i) {
                  data.push(generateData());
                }
                return data;
            }

            let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
                maxDeviation: 0.5,
                baseInterval: {
                  timeUnit: "day",
                  count: 1
                },
                renderer: am5xy.AxisRendererX.new(root, {
                pan:"zoom"
              }),
                tooltip: am5.Tooltip.new(root, {})
              }));

            let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                maxDeviation:1,
                renderer: am5xy.AxisRendererY.new(root, {
                pan:"zoom"
                })
            }))


            let series = chart.series.push(am5xy.SmoothedXLineSeries.new(root, {
                name: "Series",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value",
                valueXField: "date",
                tooltip: am5.Tooltip.new(root, {
                  labelText: "{valueY}"
                })
              }))
              
              series.fills.template.setAll({
                visible: true,
                fillOpacity: 0.2
              });
              
              series.bullets.push(function() {
                return am5.Bullet.new(root, {
                  locationY: 0,
                  sprite: am5.Circle.new(root, {
                    radius: 4,
                    stroke: root.interfaceColors.get("background"),
                    strokeWidth: 2,
                    fill: series.get("fill")
                  })
                })
            })

            chart.set("scrollbarX", am5.Scrollbar.new(root, {
                orientation: "horizontal"
            }));
            
            
            let data = generateDatas(50);
            series.data.setAll(data);

            series.appear(1000);
            chart.appear(1000, 100);

        })
        return () => {
          if (root) {
            root.dispose();
          }
        };
    }, [])




    return (

        <div id="chart-amlines">
        </div>
      
    );
}

export default AmLinesChart
