/**
 * TypeScript interface for {@link Button} props
 * @see Button
 */
export interface ButtonProps {
  /**
   * Id of current ressource
   */
  id: string;
  /**
   * Custom click event handler to which pass the click event
   */
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Button type
   */
  type?: "button" | "submit" | "reset";
  /**
   * Is button disabled
   */
  isDisabled?: boolean;
  /**
   * Button value
   */
  value: string | React.ReactNode;
}
