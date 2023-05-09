/**
 * Object containing user's nutritional values.
 *@memberof User
 *@alias KeyDataObject
 */
export type KeyDataObject = {
  /**
   * User's calorie count
   */
  calorieCount: number;
  /**
   * User's protein count
   */
  proteinCount: number;
  /**
   * User's carbohydrate count
   */
  carbohydrateCount: number;
  /**
   * User's lipid count
   */
  lipidCount: number;
};

/**
 * TypeScript interface for {@link fetchUser} data structure
 * @see fetchUser
 */
export interface User {
  /**
   * Object containing the user data.
   */
  data: {
    /**
     * User's id
     */
    id: number;
    /**
     * Object containing the user's personal information
     */
    userInfos: {
      /**
       * User's first name
       */
      firstName: string;
      /**
       * User's last name
       */
      lastName: string;
      /**
       * User's age
       */
      age: number;
    };
    /**
     * User's score
     */
    score: number | undefined;
    /**
     * Alternative data name for user score API side. Value will be stored in score if exists.
     */
    todayScore?: number | undefined;
    /**
     * The key data used to access {KeyDataObject}. Not generated in doc
     */
    keyData: keyof KeyDataObject;
  };
}

/**
 * TypeScript interface for {@link fetchUserActivity} data structure
 * @see fetchUserActivity
 */
export interface UserActivity {
  /**
   * Object containing the user's activity data.
   */
  data: {
    /**
     * User's id
     */
    userId: number;
    /**
     * Array of sessions, where each session contains data for a specific day.
     */
    sessions: {
      /**
       * Date of the session in the format "YYYY-MM-DD".
       */
      day: string;
      /**
       * Weight in kilograms during the session.
       */
      kilogram: number;
      /**
       * Calories burned during the session.
       */
      calories: number;
    }[];
  };
}

/**
 * TypeScript interface for {@link fetchUserSessions} data structure
 * @see fetchUserSessions
 */
export interface UserSessions {
  /**
   * Object containing the user's sessions data.
   */
  data: {
    /**
     * User's id
     */
    userId: number;
    /**
     * Array of sessions, where each session contains data for a specific day.
     */
    sessions: {
      /**
       * Months day of the session in the format "D" or "DD".
       */
      day: number;
      /**
       * Session length in minutes.
       */
      sessionLength: number;
    }[];
  };
}

/**
 * Object containing the kind values mapped to string values.
 *@memberof UserPerformance
 *@alias KindObject
 */
export type KindObject = {
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  "6": string;
};

/**
 * TypeScript interface for {@link fetchUserPerformance} data structure
 * @see fetchUserPerformance
 */
export interface UserPerformance {
  /**
   * Object containing the user data.
   */
  data: {
    /**
     * User's id
     */
    userId: number;
    /**
     * Object mapping kind values to string values.
     */
    kind: KindObject;
    /**
     * An array of performance data points, where each point contains a value and its associated kind.
     */
    data: {
      /**
       * The value of the performance data point.
       */
      value: number;
      /**
       * The kind of the performance data point, expressed as a key of the `kind` object. Not generated in doc
       */
      kind: keyof KindObject;
    }[];
  };
}
