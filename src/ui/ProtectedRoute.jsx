import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // Load auth user

  const { user, isLoading, isAuth } = useUser();

  useEffect(() => {
    if (!isAuth && !isLoading) navigate("/login");
  }, [isAuth, navigate, isLoading]);

  // While loading show spinner

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // If user is auth - render children
  if (isAuth) return children;
}

export default ProtectedRoute;
