import { createContext, useContext, useState, ReactNode } from "react";

type RotationContextType = {
  rotate: boolean;
  toggleRotate: () => void;
};

const RotationContext = createContext<RotationContextType | undefined>(undefined);

export const RotationProvider = ({ children }: { children: ReactNode }) => {
  const [rotate, setRotate] = useState(false);

  const toggleRotate = () => setRotate((prev) => !prev); // Toggle rotation

  return (
    <RotationContext.Provider value={{ rotate, toggleRotate }}>
      {children}
    </RotationContext.Provider>
  );
};

export const useRotation = () => {
  const context = useContext(RotationContext);
  if (!context) throw new Error("useRotation must be used within RotationProvider");
  return context;
};
