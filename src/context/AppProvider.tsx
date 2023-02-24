import React, { createContext, useState, useContext, FC } from 'react'

type AppContextType = {
  alterationValue: string
  setAlterationValue: React.Dispatch<React.SetStateAction<string>>
  rootNoteValue: string
  setRootNoteValue: React.Dispatch<React.SetStateAction<string>>
  scalesValue: string
  setScalesValue: React.Dispatch<React.SetStateAction<string>>
  displayValue: string
  setDisplayValue: React.Dispatch<React.SetStateAction<string>>
  nbStringsValue: number
  setNbStringsValue: React.Dispatch<React.SetStateAction<number>>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const AppProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alterationValue, setAlterationValue] = useState('')
  const [rootNoteValue, setRootNoteValue] = useState('')
  const [scalesValue, setScalesValue] = useState('')
  const [displayValue, setDisplayValue] = useState('')
  const [nbStringsValue, setNbStringsValue] = useState(6)

  const value: AppContextType = {
    alterationValue,
    setAlterationValue,
    rootNoteValue,
    setRootNoteValue,
    scalesValue,
    setScalesValue,
    displayValue,
    setDisplayValue,
    nbStringsValue,
    setNbStringsValue,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

const useAppContext = () => {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }

  return context
}

export { AppProvider, useAppContext }
