import React from "react";
import { PolarAngleAxisProps } from "recharts";
import { UserPerformance, KindObject } from "../../../../api/apiService";
import { capitalize } from "../../../../utils/functions";
import { kindTranslations } from "../../../../utils/translations";

export interface CustomAngleAxisProps extends PolarAngleAxisProps {
  x: number;
  y: number;
  cx: number;
  cy: number;
  payload: { coordinate: number; value: number; index: number; offset: number };
  userPerformance: UserPerformance;
}
const CustomPolarAngleAxis = ({
  payload,
  x,
  cx,
  y,
  cy,
  textAnchor,
  userPerformance,
}: CustomAngleAxisProps) => {
  const formatKind = (value: number): string => {
    return capitalize(
      kindTranslations[
        (userPerformance.data.kind as KindObject)[
          value.toString() as keyof KindObject
        ] ?? ""
      ]
    );
  };

  return (
    <g>
      <text x={x + (x - cx) * 0.2} y={y + (y - cy) * 0.3} textAnchor={textAnchor} fill="#ffffff" fontSize={12}>
        <tspan>{formatKind(payload.value)}</tspan>
      </text>
    </g>
  );
};

export default CustomPolarAngleAxis;
