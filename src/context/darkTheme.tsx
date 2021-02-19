import React, {createContext, useCallback, useState} from "react"

interface Props {
  dark: Boolean;
  handleChangeTheme(): void;
}

export const Context = createContext({} as Props)

const DarkProvider : React.FC = ({children}) => {

  const [dark, setDark] = useState(true);

  // const handleChangeTheme = useCallback(() => {
  //   setDark(prevState => !prevState)
  // }, []);

  function handleChangeTheme() {
    setDark(prevState => !prevState)
  }

 
  return (
    <Context.Provider value={{dark, handleChangeTheme}}>
      {children} 
    </Context.Provider>
  )
}

export default DarkProvider