

import React, { useEffect, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const DayHalfDoughnut = ({ dataDay }) => {

  let root

  useEffect(() => {

    if (dataDay) {
      am5.ready(function () {

        root = am5.Root.new("day-half-doughnut");
        root._logo.dispose();
        root.setThemes([am5themes_Animated.new(root)]);
  
        let chart = root.container.children.push(am5percent.PieChart.new(root, {
          startAngle: 180,
          endAngle: 360,
          layout: root.verticalLayout,
          innerRadius: am5.percent(80),
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
          cornerRadius: 18,
          templateField: "sliceSettings",
          tooltipText: ""
        });
  
        series.labels.template.set("forceHidden", true);
  
      
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
          0: ["#E33A4E", "#584063"],
          1: ["#CF283C", "#E84519"],
          2: ["#F26642", "#FFC363"],
        }
   
        let dataArray = [
          { value: dataDay.health, category: "health" },
          { value: dataDay.wealth, category: "wealth" },
          { value: dataDay.happiness, category: "happiness" }
        ]
  
        
        const styledData = dataArray.map((item, index) => {
  
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
  
  
  
        // set data
        series.data.setAll(styledData);
        series.appear(1000, 100);
        
      })
    }


    return () => {
        if (root) {
          root.dispose();
        }
    };
  }, [dataDay]);

  return (

    <div id="day-half-doughnut">
        <div className="score-box">
          <p className="total">total</p>
          <h2 className="day-main-score">{dataDay ? dataDay.sum : "0000"}</h2>
        </div>
    </div>
  
  );
};

export default DayHalfDoughnut;
