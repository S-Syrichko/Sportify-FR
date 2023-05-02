/**
 * A function that returns recieved str with uppercased first caracter
 * @param {string} str "foo"
 * @returns {string} "Foo"
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};


/**
 * A function that retuns an rgb value of hex
 * @param {string} hex "#ff5500"
 * @returns {string} "255, 85, 0"
 */
export const hexToRgb=(hex: string): string =>{
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}