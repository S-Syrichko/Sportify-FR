import { useEffect, useState } from "react";
import { fetchUserActivity } from "../../../../api/apiService";
import { UserActivity } from "../../../../api/DataTypes";

export const useUserActivity = (userId: number) => {
  const [data, setData] = useState<UserActivity | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (userId) {
      setIsLoading(true);
      fetchUserActivity(userId)
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
