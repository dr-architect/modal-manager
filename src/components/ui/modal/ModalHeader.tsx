import React, { ReactNode } from 'react';

interface ModalHeaderProps {
    children: ReactNode;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children }) => {
    return (
        <div id="default-modal" className="pb-4">
            {children}
        </div>
    );
}
