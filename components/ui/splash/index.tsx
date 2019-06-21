import { useState } from "react";
import { Loader, SplashContainer } from "./splash.styled";

export default () => {
  return (
    <SplashContainer>
      <Loader />
    </SplashContainer>
  );
};
