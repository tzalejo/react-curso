import { useState } from "react";
import { UserContext } from "./UserContext";
// function component
// const User = {
//   id: 1,
//   name: "Alejandro",
//   email: "tzalejo@gmail.com",
// };
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
