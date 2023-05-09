import { useCallback } from "react";
import { valueFormatter } from "../../../utils/functions";

export const useUnit = (type: string, value: number) => {
  return useCallback(() => {
    switch (type) {
      case "calorie":
        return {
          unit: "kCal",
          formattedValue: valueFormatter(value),
        };
      case "protein":
      case "carbohydrate":
      case "lipid":
        return {
          unit: "g",
          formattedValue: valueFormatter(value),
        };
      default:
        return {
          isError: true,
          message: "Unexpected type value for Card",
        };
    }
  }, [type]);
};
