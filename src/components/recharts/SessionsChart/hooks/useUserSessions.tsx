import { useEffect, useState } from "react";
import { fetchUserSessions } from "../../../../api/apiService";
import { UserSessions } from "../../../../api/DataTypes";

export const useUserSessions = (userId: number) => {
  const [data, setData] = useState<UserSessions | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (userId) {
      setIsLoading(true);
      fetchUserSessions(userId)
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
          setIsLoading(false);
        });
    }
  }, [userId]);

  return { data, isLoading, isError };
};
