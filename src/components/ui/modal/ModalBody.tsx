import React, { ReactNode } from 'react';

interface ModalBodyProps {
    children: ReactNode;
}

export const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
    return (
        <div className="flex flex-col items-start py-4">
            {children}
        </div>
    );
}
