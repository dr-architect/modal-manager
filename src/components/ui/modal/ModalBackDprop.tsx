import React, { ReactNode } from 'react';

interface ModalBackDropProps {
    children: ReactNode;
}

export const ModalBackDrop: React.FC<ModalBackDropProps> = ({ children }) => {
    return (
        <div id="default-modal" className="absolute top-0 h-full w-full flex justify-center items-center backdrop-blur bg-amber-1 bg-[#192F5299]">
            {children}
        </div>
    );
}
