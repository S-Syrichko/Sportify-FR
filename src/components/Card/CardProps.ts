/**
 * TypeScript interface for {@link Card} props
 * @see Card
 */
export interface CardProps {
  /**
   * The SVG icon as React component to display on the card
   */
  SvgIcon: any;
  /**
   * The color of the icon and background, in hexadecimal format
   */
  color: string;
  /**
   * The value to display on the card.
   */
  value: number;
  /**
   * The type of the value and unit to display.
   */
  type: string;
}
