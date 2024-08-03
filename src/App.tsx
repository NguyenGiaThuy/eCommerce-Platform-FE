import { initializedApp } from "@redux/auth/slice";
import { useAppDispatch } from "@redux/store";
import AppRouter from "@routes/router";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      initializedApp({
        user: null,
        isAuthenticated: false,
      })
    );
  }, []);

  return <AppRouter />;
}

export default App;
