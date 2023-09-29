import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const ScoreChart = () => {
  let root;

  useEffect(() => {
    am5.ready(function () {
      root = am5.Root.new("chart-div");

      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(am5percent.PieChart.new(root, {
        startAngle: 180,
        endAngle: 360,
        layout: root.verticalLayout,
        innerRadius: am5.percent(80),
      }));

      let series = chart.series.push(am5percent.PieSeries.new(root, {
        startAngle: 180,
        endAngle: 360,
        valueField: "value",
        categoryField: "category",
        alignLabels: false,
      }));

      series.data.setAll([
        { value: 10, category: "One" },
        { value: 9, category: "Two" },
        { value: 6, category: "Three" },
        { value: 5, category: "Four" },
        { value: 4, category: "Five" },
        { value: 3, category: "Six" },
        { value: 1, category: "Seven" },
      ]);

      series.appear(1000, 100);
    });

    return () => {
        if (root) {
          root.dispose();
        }
      };
  }, []);

  return (
    <div>
      <div id="chart-div" style={{ height: "500px", width: "100%" }}></div>
    </div>
  );
};

export default ScoreChart;
