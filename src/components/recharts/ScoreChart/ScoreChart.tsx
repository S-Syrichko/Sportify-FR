import React from "react";
import styles from "./ScoreChart.module.scss";
import PropTypes from "prop-types";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import CustomLegend from "../custom/Legend/CustomLegend";

interface ScoreProps {
  scoreData: number | undefined;
}


/**
 * Displays a recharts PieChart of {@link UserScore} data.
 * 
 * Chart's center is filled by a white Pie.
 * 
 * Also displays scoreData as percentage in center of chart.
 * @category Recharts
 * @prop {number} scoreData User score data as percentage in décimal notation
 * @returns {JSX.Element} User score chart React Element.
 * @example
 * // Example usage:
 * <ScoreChart scoreData={0.4} />
 */
const ScoreChart = ({ scoreData }: ScoreProps): JSX.Element => {
  const data = [
    { name: "Score", value: scoreData ? scoreData : 0 },
    { name: "Remaining", value: 1 - (scoreData ? scoreData : 0) },
  ];
  const centerFiller = [{ name: "Background", value: 1 }];

  return (
    <div className={styles.score}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={260} height={260}>
          <Legend
            content={<CustomLegend chartName="score" />}
            verticalAlign="top"
          />
          <Pie
            data={centerFiller}
            cx={125}
            cy={90}
            innerRadius={0}
            outerRadius={80}
            dataKey="value"
            stroke="none"
            fill="#ffffff"
          ></Pie>
          <text x={130} y={140} textAnchor="middle">
            <tspan
              className={styles.scoreNum}
              x={130}
              dy={-13}
              textAnchor="middle"
            >
              {scoreData ? scoreData * 100 : 0}%
            </tspan>
            <tspan x={130} dy={26} fill="#74798C">
              de votre
            </tspan>
            <tspan x={130} dy={26} fill="#74798C" textAnchor="middle">
              objectif
            </tspan>
          </text>
          <Pie
            data={data}
            cx={125}
            cy={90}
            innerRadius={80}
            outerRadius={90}
            cornerRadius={10}
            startAngle={90}
            endAngle={450}
            paddingAngle={1}
            dataKey="value"
          >
            <Cell fill="#ff0000" />
            <Cell fill="#fbfbfb" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

ScoreChart.propTypes = {
  scoreData: PropTypes.number.isRequired,
};

export default ScoreChart;
