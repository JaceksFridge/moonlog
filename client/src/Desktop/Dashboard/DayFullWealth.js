

import React, { useEffect } from 'react'
import * as am5 from "@amcharts/amcharts5"
import * as am5percent from "@amcharts/amcharts5/percent"
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"

const DayFullWealth = () => {

    let root

    useEffect(() => {
        am5.ready(function() {
  
        root = am5.Root.new("day-full-wealth")
        root.setThemes([am5themes_Animated.new(root)])
  
  
        let chart = root.container.children.push(am5percent.PieChart.new(root, {
          layout: root.horizontalLayout,
          innerRadius: am5.percent(75)
        }))
  
        const series = chart.series.push(am5percent.PieSeries.new(root, {
          startAngle: 180,
          endAngle: 540,
          valueField: "value",
          categoryField: "category",
          alignLabels: false,
          width: 10,
          height: 10
        }))
  
        series.labels.template.set("forceHidden", true);
  
        series.slices.template.setAll({
          cornerRadius: 3,
          templateField: "sliceSettings",
          tooltipText: ""
        });
  
        let dataArray2 = [
          { value: 100, category: "Activity 1" },
          { value: 90, category: "Activity 2" },
          { value: 60, category: "Activity 3" },
          { value: 60, category: "Other" },
        ]
  
  
        const gradientColors = {
          0: ["#E33B4F", "#B53857"],
          1: ["#B43857", "#86365F"],
          2: ["#86365F", "#583468"],
          3: ["#323232", "#323232"]
        }
  
  
        const styledData = dataArray2.map((item, index) => {
  
          let gradient =  am5.LinearGradient.new(root, {
            stops: [{
              color: am5.color(gradientColors[index][0])
            }, {
              color: am5.color(gradientColors[index][1])
            }]
          })
  
          return {
            ...item,
            sliceSettings: {
              fillGradient: gradient,
              stroke: am5.color('#000000')
            }
          }
        })
  
        series.data.setAll(styledData)
        series.appear(1000, 100);
  
      })
  
      return () => {
        if (root) {
          root.dispose();
        }
      };
    }, []);
    return (
    <div id="day-full-wealth">
        <div className="watermark-cover"></div>
    </div>
    )
}

export default DayFullWealth
