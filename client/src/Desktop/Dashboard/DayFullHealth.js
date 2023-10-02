

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
          innerRadius: am5.percent(80)
        }))

        const series = chart.series.push(am5percent.PieSeries.new(root, {
          valueField: "value",
          categoryField: "category",
          alignLabels: false,
          width: 10,
          height: 10
        }))

        series.labels.template.set("forceHidden", true);



      let dataArray2 = [
        { value: 100, category: "Health" },
        { value: 90, category: "Wealth" },
        { value: 60, category: "Happiness" },
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
