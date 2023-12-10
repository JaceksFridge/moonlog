import React, { useEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const MainBarChart = ({ data }) => {
    let root;

    useEffect(() => {
        am5.ready(() => {
            root = am5.Root.new("main-bar-chart");
            root._logo.dispose();
            root.setThemes([am5themes_Animated.new(root)]);

            let chart = root.container.children.push(am5xy.XYChart.new(root, {
                panX: false,
                panY: false,
                wheelX: undefined,
                wheelY: undefined,
                pinchZoomX: false,
            }));
            // Axis and Stuff
            let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
            cursor.lineY.set("visible", false);

            // X-Axis (CategoryDateAxis)
            let xAxis = chart.xAxes.push(am5xy.CategoryDateAxis.new(root, {
                baseInterval: { timeUnit: "day", count: 1 },
                categoryField: "day",
                renderer: am5xy.AxisRendererX.new(root, {
                }),
                tooltip: am5.Tooltip.new(root, {})
            }));
            xAxis.get("renderer").labels.template.setAll({
                paddingTop: 15,
                paddingRight: -80,
            });

            // Y-Axis
            let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                min: 0,
                renderer: am5xy.AxisRendererY.new(root, {})
            }));
            yAxis.get("renderer").labels.template.setAll({
                paddingRight: 25,
            });


            // x labels
            const XaxisLabelsTemplate = xAxis.get("renderer").labels.template;
            XaxisLabelsTemplate.setAll({ fill: am5.color("#FCFCFC"), stroke: am5.color(0xFFFFFF), fillOpacity: 0.5 });

            // y labels
            const YaxisLabelsTemplate = yAxis.get("renderer").labels.template;
            YaxisLabelsTemplate.setAll({ fill: am5.color("#F7F7F7"), stroke: am5.color(0xFFFFFF), fillOpacity: 0.5 });




            // Series
            var series = chart.series.push(am5xy.ColumnSeries.new(root, {
                name: "Series",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value",
                categoryXField: "day",
                sequencedInterpolation: true,
                fill: am5.color(0x000000),
                tooltip: am5.Tooltip.new(root, {
                  labelText: "{valueY}",
                }),
            }));

            // column styles
            series.columns.template.setAll({ 
                cornerRadiusTL: 3, 
                cornerRadiusTR: 3, 
                strokeOpacity: 0.8,
                fillOpacity: 0.8,
            });
          series.columns.template.set("fillGradient", am5.LinearGradient.new(root, {
            stops: [{
              color: am5.color(0x9E9E9E)
            }, {
              color: am5.color(0x000000)
            }],
            rotation: 90
          }));
            
          series.columns.template.adapters.add("stroke", function(stroke, target) {
              return am5.color("#000000");
          })



            // Format and set data
            let processedData = data.map(item => ({
                day: new Date(item.date), // Assuming 'item.date' is in a format that can be converted to a Date object
                value: item.sum
            }));

            xAxis.data.setAll(processedData);
            series.data.setAll(processedData);

            series.appear(1000);
            chart.appear(1000, 100);
        });

        return () => {
            if (root) {
                root.dispose();
            }
        };
    }, [data]);

    return (
        <div id="main-bar-chart"></div>
    );
}

export default MainBarChart;
