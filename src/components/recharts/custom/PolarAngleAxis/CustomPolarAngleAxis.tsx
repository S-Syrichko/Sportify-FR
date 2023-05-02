import React from "react";
import PropTypes from "prop-types";
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

CustomPolarAngleAxis.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  textAnchor: PropTypes.oneOf(["start", "middle", "end"]),
  payload: PropTypes.shape({
    coordinate: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired,
  }).isRequired,
  userPerformance: PropTypes.shape({
    data: PropTypes.shape({
      kind: PropTypes.objectOf(PropTypes.string),
    }),
  }).isRequired,
};

export default CustomPolarAngleAxis;
