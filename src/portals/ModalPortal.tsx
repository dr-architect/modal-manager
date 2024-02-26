import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import React from 'react';

interface PortalProps {
  children: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const [modalRoot] = useState(() => document.getElementById('modal-root') || document.createElement('div'));

  useEffect(() => {
    if (!document.getElementById('modal-root')) {
      modalRoot.id = 'modal-root';
      document.body.appendChild(modalRoot);
    }

    return () => {
      document.body.removeChild(modalRoot);
    };
  }, [modalRoot]);

  return createPortal(children, modalRoot);
}

export default Portal;
