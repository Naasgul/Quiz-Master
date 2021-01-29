import * as React from "react";

interface AppContextInterface {
  valueA: any;
  setValueA: (value: any) => void;
  fiftyUsed: boolean;
  setFiftyUsed: (value: any) => void;
  score: number;
  setScore: (value: any) => void;
}

export const UserContext = React.createContext<AppContextInterface | null>(
  null
);

const UserProvider: React.FC = (props) => {
  const [valueA, setValueA] = React.useState(null);
  const [fiftyUsed, setFiftyUsed] = React.useState(false);
  const [score, setScore] = React.useState(0);

  return (
    <UserContext.Provider
      value={{
        valueA,
        setValueA,
        fiftyUsed,
        setFiftyUsed,
        score,
        setScore,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
