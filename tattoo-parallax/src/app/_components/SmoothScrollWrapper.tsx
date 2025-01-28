import React, { ReactNode } from "react";

import { ReactLenis, useLenis } from "lenis/react";

export const SmoothScrollWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
      }}
    >
      {children}
    </ReactLenis>
  );
};
