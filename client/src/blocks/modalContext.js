

import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [settingsModal, setSettingsModal] = useState(false);
    const [logoutModal, setLogoutModal] = useState(false);
    const [resetModal, setResetModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [logReg, setLogReg] = useState(false)
    

    return (
        <ModalContext.Provider 
            value={{ 
                settingsModal, setSettingsModal, 
                logoutModal, setLogoutModal,
                resetModal, setResetModal,
                deleteModal, setDeleteModal,
                logReg, setLogReg
            }}>
            {children}
        </ModalContext.Provider>
    );
};
