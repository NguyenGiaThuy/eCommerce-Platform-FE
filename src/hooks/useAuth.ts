import { useAppSelector } from "@redux/store";

const useAuth = () => {
  const auth = useAppSelector((state) => state.auth);

  return {
    ...auth,
  };
};

export default useAuth;
