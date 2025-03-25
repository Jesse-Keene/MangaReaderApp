import React, { createContext, useContext, useState, ReactNode } from "react";

interface MangaContextType {
  isLoading: { [key: string]: boolean };
  setIsLoading: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
}

const MangaContext = createContext<MangaContextType | undefined>(undefined);

interface MangaProviderProps {
  children: ReactNode;
}

export const MangaProvider: React.FC<MangaProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<{ [key: string]: boolean }>({});

  const value = {
    isLoading,
    setIsLoading,
  };

  return (
    <MangaContext.Provider value={value}>{children}</MangaContext.Provider>
  );
};

export const useManga = () => {
  const context = useContext(MangaContext);
  if (context === undefined) {
    throw new Error("useManga must be used within a MangaProvider");
  }
  return context;
};
