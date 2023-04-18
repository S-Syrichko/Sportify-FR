//apiService.ts
//import axios from "axios";
import axios from "./mocks/mockApi";

const apiUrl = import.meta.env.VITE_API_URL;


export interface User {
  data: {
    id: number;
    userInfos: {
      firstName: string;
      lastName: string;
      age: number;
    };
    score: number;
    todayScore: number;
    keyData: {
      calorieCount: number;
      proteinCount: number;
      carbohydrateCount: number;
      lipidCount: number;
    };
  };
}

/**
 *
 * @param userId
 * @return {User}
 */
export const fetchUser = async (userId: number) => {
  const url = `${apiUrl}/user/${userId}`;
  try {
    const { data }: { data: User } = await axios.get(url);
    return data;
  } catch (err) {
    throw err;
  }
};

export interface UserActivity {
  data: {
    userId: number;
    sessions: {
      day: string;
      kilogram: number;
      calories: number;
    }[];
  };
}
/**
 *
 * @param userId
 * @returns {UserActivity}
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

export interface UserSessions {
  data: {
    userId: number;
    sessions: {
      day: number;
      sessionLength: number;
    }[];
  };
}
/**
 * 
 * @param userId 
 * @returns {UserSessions}
 */

export const fetchUserSessions = async (userId: number) => {
  const url = `${apiUrl}/user/${userId}/average-sessions`
  try {
    const { data }: { data: UserSessions } = await axios.get(url);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
