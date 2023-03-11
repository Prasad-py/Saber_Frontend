import React from 'react';
 
const userContext = React.createContext({
    userData : false,
    setUserData: (user) => {}
});
 
export default userContext;