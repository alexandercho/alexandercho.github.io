import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ScrollContextType {
    scrollY: number;
    setScrollY: (value: number) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;
};

interface ScrollProviderProps {
    children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
    const [scrollY, setScrollY] = useState(0);

    return (
        <ScrollContext.Provider value={{ scrollY, setScrollY }}>
            {children}
        </ScrollContext.Provider>
    );
};
