

import React, { useEffect } from 'react'
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const DayFullHealth = () => {

    let root

    useEffect(() => {
        am5.ready(function() {

        root = am5.Root.new("day-full-health")
        root.setThemes([am5themes_Animated.new(root)])


        let chart = root.container.children.push(am5percent.PieChart.new(root, {
          layout: root.horizontalLayout,
          innerRadius: am5.percent(75)
        }))

        const series = chart.series.push(am5percent.PieSeries.new(root, {
          valueField: "value",
          categoryField: "category",
          alignLabels: false,
          width: 10,
          height: 10
        }))

        let gradient = am5.LinearGradient.new(root, {
          stops: [{
            color: am5.color("#F26642")
          }, {
            color: am5.color("#FFC363")
          }]
        })
        series.labels.template.set("forceHidden", true);

        series.slices.template.setAll({
          fillGradient: gradient,
          stroke: am5.color("#000000")
        })

      let dataArray2 = [
        { value: 100, category: "Activity 1" },
        { value: 90, category: "Activity 2" },
        { value: 60, category: "Activity 3" },
        { value: 60, category: "Other" },
      ]

      series.data.setAll(dataArray2)
      series.appear(1000, 100);

    })

    return () => {
      if (root) {
        root.dispose();
      }
    };
  }, []);

  return (
    <div id="day-full-health">
        <div className="watermark-cover"></div>
    </div>
  )
};

export default DayFullHealth
