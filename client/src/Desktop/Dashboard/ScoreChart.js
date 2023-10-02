

import React, { useEffect, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const ScoreChart = ({ dataArray }) => {
  let root;



  useEffect(() => {
    am5.ready(function () {


      // let gradientoo = am5.LinearGradient.new(root, {
      //   stops: [{
      //     color: am5.color(0xFF621F)
      //   }, {
      //     color: am5.color(0x946B49)
      //   }]
      // });

      root = am5.Root.new("day-half-doughnut");
      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(am5percent.PieChart.new(root, {
        startAngle: 180,
        endAngle: 360,
        layout: root.verticalLayout,
        innerRadius: am5.percent(85),
      }));

    
      const series = chart.series.push(am5percent.PieSeries.new(root, {
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
        cornerRadius: 5,
        templateField: "sliceSettings",
        fillGradient: am5.LinearGradient.new(root, {
          stops: [{
            color: am5.color(0xff621f)
          }, {
            color: am5.color(0x946b49)
          }]
        })
      });
    

      let hey = dataArray
      let dataArray2 = [
        { value: 100, category: "Health" },
        { value: 90, category: "Wealth" },
        { value: 60, category: "Happiness" },
      ]

      const sliceBorder = {
        0: "#F52028",
        1: "#FE8A4A",
        2: "#664368"
      }
      const sliceFill = {
        0: "rgba(245, 32, 39, 0.5)",
        1: "rgba(254, 137, 74, 0.5)",
        2: "rgba(102, 67, 104, 0.5)"
      }
      const gradientColors = {
        0: ["#584063", "#E33A4E"],
        1: ["#CF283C", "#E84519"],
        2: ["#F26642", "#FFC363"]
      }


      const styledData = dataArray2.map((item, index) => {


        let gradient = "#FF00EE"

        return {
          ...item,
          sliceSettings: {
            fill: gradient,
            // fill: sliceFill[index],
            stroke: sliceBorder[index]
            // stroke: "#FFFFFF"
          }
        }
      })


      // series.ticks.template.setAll({
      //   forceHidden: true
      // });

      // columnSeries.columns.template.set("fillGradient", am5.LinearGradient.new(root, {
      //   stops: [{
      //     color: am5.color(0xff621f)
      //   }, {
      //     color: am5.color(0x946b49)
      //   }]
      // }));


      // set data
      series.data.setAll(styledData);
      series.appear(1000, 100);
      
    });

    return () => {
        if (root) {
          root.dispose();
        }
    };
  }, []);

  return (

    <div id="day-half-doughnut">
        <div className="watermark-cover"></div>
    </div>
  
  );
};

export default ScoreChart;
