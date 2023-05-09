import { PolarAngleAxisProps } from "recharts";
import { UserPerformance } from "../../../../api/DataTypes";

/**
 * TypeScript interface for {@link CustomPolarAngleAxis} props
 * @see CustomPolarAngleAxis
 */
export interface CustomAngleAxisProps extends PolarAngleAxisProps {
  /**
   * The x-coordinate of the center of the axis.
   */
  x: number;
  /**
   * The y-coordinate of the center of the axis.
   */
  y: number;
  /**
   * The x-coordinate of the center of the chart.
   */
  cx: number;
  /**
   * The y-coordinate of the center of the chart.
   */
  cy: number;
  /**
   * Additional data payload for the axis.
   */
  payload: {
    /**
     * The coordinate value of the axis.
     */ 
    coordinate: number;
    /**
     * The value associated with the coordinate.
     */ 
    value: number;
    /**
     * The index of the coordinate in the data array.
     */ 
    index: number;
    /**
     * The offset of the coordinate value from the center of the chart.
     */ 
    offset: number };
    /**
     * User performance data for the axis.
     */
  userPerformance: UserPerformance;
}
