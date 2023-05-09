/**
 * @category Utility
 * @function
 * @description Capitalize first caracter of a string
 * @param {string} str String to capitalize
 * @returns {string} Capitalized string
 * @example
 * const str = "fooBar"
 * return "FooBar"
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};


/**
 * @category Utility
 * @function
 * @description Format an hexadecimal color value to RGB
 * @param {string} hex Color value in hexadeximal format
 * @returns {string} Color value in RGB format
 * @example
 * const hex = "#faba00"
 * return "250, 186, 0"
 */
export const hexToRgb=(hex: string): string =>{
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}


/**
 * @category Utility
 * @function
 * @description Format a number to a 3 significant digits format 
 * @param {number} value Value to convert
 * @returns {number} Converted value
 * @example
 * const value = 12345
 * return 12,345
 */
export const valueFormatter = (value: number) => {
  return new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(value);
};