import React from "react";
import PropTypes from "prop-types";
import { KindObject } from "../../../../api/DataTypes";
import { CustomAngleAxisProps } from "./CustomAngleAxisProps";
import { capitalize } from "../../../../utils/functions";
import { kindTranslations } from "../../../../utils/translations";

/**
 * Recharts custom polar angle axis component.
 * @category Recharts components
 * @property {CustomAngleAxisProps} props - Rechart PolarAngleAxis props
 * @returns {JSX.Element} The custom recharts polar angle axis.
 * @example
 * // Example usage:
 * import { PolarAngleAxis } from "recharts";
 * <PolarAngleAxis
            dataKey="kind"
            range={[-150, 210]}
            tick={(props) => (
              <CustomPolarAngleAxis
                {...props}
                userPerformance={userPerformance}
              />
            )}
          />
 */
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
      <text
        x={x + (x - cx) * 0.2}
        y={y + (y - cy) * 0.3}
        textAnchor={textAnchor}
        fill="#ffffff"
        fontSize={12}
      >
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
