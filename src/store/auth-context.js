import React from 'react'

const AuthContext = React.createContext({
    onSwithc: false,
    onLogout: () => {},
    setSwitch:false,
})

export default AuthContext