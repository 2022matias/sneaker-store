import React from 'react'

export const CurrentUserContext = React.createContext()

export default function CurrentUserProvider ({ children }) {
  const [currentUser, setCurrentUser] = React.useState(null)
  const [counter, setCounter] = React.useState(0)
  return (
    <CurrentUserContext.Provider
      value={[currentUser, setCurrentUser, counter, setCounter]}
    >
      {children}
    </CurrentUserContext.Provider>
  )
}
