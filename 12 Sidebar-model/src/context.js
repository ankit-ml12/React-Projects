import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
        isSidebarOpen,
        isModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

//custom hook for avaoid again again importing of Appcontext and AppConotext

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
