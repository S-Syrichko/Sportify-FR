import { useEffect, useState } from "react";
import { fetchUserPerformance } from "../../../../api/apiService";
import { UserPerformance } from "../../../../api/DataTypes";

export const useUserPerformance = (userId: number) => {
  const [data, setData] = useState<UserPerformance | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (userId) {
      setIsLoading(true);
      fetchUserPerformance(userId)
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
