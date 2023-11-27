

import React, { useEffect } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from "@amcharts/amcharts5/xy"
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"

const MainBarchart = ({ data }) => {

    let root
    // console.log("data is in MainBarchart", data)

    useEffect(() => {

        am5.ready(() => {

          root = am5.Root.new("main-bar-chart")
          root.setThemes([am5themes_Animated.new(root)])

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

          let xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
          xRenderer.labels.template.setAll({
              rotation: -90,
              centerY: am5.p50,
              centerX: am5.p100,
              paddingRight: 15
          })

          xRenderer.grid.template.setAll({
              location: 1
            })
            
          let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
              maxDeviation: 0.3,
              categoryField: "day",
              renderer: xRenderer,
              tooltip: am5.Tooltip.new(root, {})
          }));
            
          let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
              maxDeviation: 0.3,
              renderer: am5xy.AxisRendererY.new(root, {
              strokeOpacity: 0.1
              })
          }))


          const XaxisLabelsTemplate = xAxis.get("renderer").labels.template;
          XaxisLabelsTemplate.setAll({ fill: am5.color("#FCFCFC"), stroke: am5.color(0xFFFFFF), fillOpacity: 0.5 });

          const YaxisLabelsTemplate = yAxis.get("renderer").labels.template;
          YaxisLabelsTemplate.setAll({ fill: am5.color("#F7F7F7"), stroke: am5.color(0xFFFFFF), fillOpacity: 0.5 });

          const myTheme = am5.Theme.new(root);
          myTheme.rule("Grid").setAll({ stroke: am5.color("#F2F2F2") });
          // root.setThemes([myTheme]);


          // Series
          var series = chart.series.push(am5xy.ColumnSeries.new(root, {
              name: "Series 1",
              xAxis: xAxis,
              yAxis: yAxis,
              valueXField: "day",
              valueYField: "value",
              fill: am5.color(0xFFFFFF),
              sequencedInterpolation: true,
              categoryXField: "day",
              tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}"
              })
          }))
            
          series.columns.template.setAll({ 
            cornerRadiusTL: 3, 
            cornerRadiusTR: 3, 
            strokeOpacity: 0.8,
            fillOpacity: 0.8,
          });
          series.columns.template.adapters.add("fill", function(fill, target) {
            return am5.color("#F7F7F7");
          })
            
          series.columns.template.adapters.add("stroke", function(stroke, target) {
              return am5.color("#F7F7F7");
          })
        

          let cutData = data.map((item, index) => {
            
            return (
              { day: new Date(item.date), 
                value: item.sum 
              }
            )
          })

          console.log("cutData")
          console.log(cutData)
   

          xAxis.data.setAll(cutData);
          series.data.setAll(cutData);

          series.appear(1000);
          chart.appear(1000, 100);

      })
      return () => {
          if (root) {
            root.dispose()
          }
      }
    }, [data])

    return (
        <div id="main-bar-chart">
          <div className="watermark-cover"></div>
        </div>
    )
}

export default MainBarchart
