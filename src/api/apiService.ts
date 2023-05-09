import axios from "axios";
//import axios from "./mocks/mockApi";

import { User, UserActivity, UserSessions, UserPerformance } from "./DataTypes";

const apiUrl = import.meta.env.VITE_API_URL;

/**
 * @category API
 * @function
 * @description Fetches user data from API
 * @param {number} userId User id in database
 * @returns {User} The user data
 * @throws If an error occurs while fetching the data.
 * @example
 * const data = await fetchUser(18);
 * console.log(data); //User structure with id: 18
 */
export const fetchUser = async (userId: number) => {
  const url = `${apiUrl}/user/${userId}`;
  try {
    const { data }: { data: User } = await axios.get(url);
    const finalScore =
      data.data.score !== undefined ? data.data.score : data.data.todayScore;
    data.data.score = finalScore;
    return data;
  } catch (err) {
    throw err;
  }
};

/**
 * @category API
 * @function
 * @description Fetches user's activity data from API
 * @param {number} userId User id in database
 * @returns {UserActivity} The user activity data
 * @throws If an error occurs while fetching the data.
 * @example
 * const data = await fetchUserActivity(18);
 * console.log(data); //UserActivity structure with id: 18
 */
export const fetchUserActivity = async (userId: number) => {
  const url = `${apiUrl}/user/${userId}/activity`;
  try {
    const { data }: { data: UserActivity } = await axios.get(url);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

/**
 * @category API
 * @function
 * @description Fetches user's session data from API
 * @param {number} userId User id in database
 * @returns {UserSessions} The user sessions data
 * @throws If an error occurs while fetching the data.
 * @example
 * const data = await fetchUserSessions(18);
 * console.log(data); //UserSessions structure with id: 18
 */
export const fetchUserSessions = async (userId: number) => {
  const url = `${apiUrl}/user/${userId}/average-sessions`;
  try {
    const { data }: { data: UserSessions } = await axios.get(url);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

/**
 * @category API
 * @function
 * @description Fetches user's performance data from API
 * @param {number} userId User id in database
 * @returns {UserPerformance} The user performance data
 * @throws If an error occurs while fetching the data.
 * @example
 * const data = await fetchUserPerformance(18);
 * console.log(data); //UserPerformance structure with id: 18
 */
export const fetchUserPerformance = async (userId: number) => {
  const url = `${apiUrl}/user/${userId}/performance`;
  try {
    const { data }: { data: UserPerformance } = await axios.get(url);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
