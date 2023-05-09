import { useEffect, useState } from "react";
import { fetchUser } from "../../../api/apiService";
import { User } from "../../../api/DataTypes";

export const useFetchUser = (userId: number) => {
  const [data, setData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (userId) {
      setIsLoading(true);
      fetchUser(userId)
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
