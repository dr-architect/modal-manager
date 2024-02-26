import React, { ReactNode } from 'react';

interface ModalFooterProps {
    children: ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => {
    return (
        <div className="flex justify-center between space-x-3 pt-4">
            {children}
        </div>
    );
}
