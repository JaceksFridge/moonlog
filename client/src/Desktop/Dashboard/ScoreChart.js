

import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const ScoreChart = ({ dataArray }) => {
  let root;

  useEffect(() => {
    am5.ready(function () {

      root = am5.Root.new("chart-div");
      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(am5percent.PieChart.new(root, {
        startAngle: 180,
        endAngle: 360,
        layout: root.verticalLayout,
        innerRadius: am5.percent(85),
      }));

      // series
      let series = chart.series.push(am5percent.PieSeries.new(root, {
        startAngle: 180,
        endAngle: 360,
        valueField: "value",
        categoryField: "category",
        alignLabels: false,
      }));


      series.states.create("hidden", {
        startAngle: 180,
        endAngle: 180
      });
      
      series.slices.template.setAll({
        cornerRadius: 5
      });
      
      series.ticks.template.setAll({
        forceHidden: true
      });


      // set data
      series.data.setAll(dataArray);
      series.appear(1000, 100);
      
    });

    return () => {
        if (root) {
          root.dispose();
        }
      };
  }, []);

  return (

    <div id="chart-div">
        <div className="watermark-cover"></div>
    </div>
  
  );
};

export default ScoreChart;
