import React, { ReactNode } from 'react';

interface ModalContentProps {
    children: ReactNode;
}

export const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
    return (
        <div className="w-[400px] flex flex-col justify-center justify-items-center bg-white rounded-xl p-6 shadow-xl">
            {children}
        </div>
    );
}
