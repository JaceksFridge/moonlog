

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
          alignLabels: false
        }))

        // series.labels.template.setAll({
        //   textType: "circular",
        //   centerX: 0,
        //   centerY: 0
        // })

        series.labels.template.set("forceHidden", true);



      let dataArray2 = [
        { value: 100, category: "Health" },
        { value: 90, category: "Wealth" },
        { value: 60, category: "Happiness" },
      ]



      // Legend
      var legend = chart.children.unshift(am5.Legend.new(root, {
        // centerX: am5.percent(50),
        // x: am5.percent(50),
        // marginTop: 15,
        // marginBottom: 15,

        y: am5.percent(50),
        centerY: am5.percent(50)
      }))

      legend.markers.template.setAll({
        width: 24,
        height: 24
      });

      series.data.setAll(dataArray2)
      legend.data.setAll(series.dataItems);
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
