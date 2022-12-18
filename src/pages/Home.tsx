import React from "react";
import { Link } from "react-router-dom";

import { useAppContext } from "../hooks/useAppContext";
import Skeleton from "@mui/material/Skeleton";

const Home: React.FC = (): JSX.Element => {
  const { count } = useAppContext();

  return (
    <section>
      <h1>Welcome!</h1>
      <p>Current count: {count}</p>
      <Skeleton width={200} height={400} />
      <Link to="/count">Go to count page</Link>
    </section>
  );
};

export default Home;
