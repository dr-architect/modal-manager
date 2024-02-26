import React, { ReactNode, useEffect, useState } from 'react';

const FREEZE = 2000;

type ButtonType = 'button' | 'submit' | 'reset' | undefined;
interface IButton {
    handleClick?: () => void;
    type?: ButtonType;
    title?: string;
    className: string;
    freeze?: boolean;
    disabled?: boolean | undefined;
    children: ReactNode;
}

export const Button: React.FC<IButton> = ({
    children,
    type,
    title,
    className,
    freeze,
    disabled,
    handleClick
}) => {
    const [isFreezed, setDisable] = useState(freeze)

    useEffect(() => {
        if (isFreezed) {
            const changeStateAfterTimeout = ()  => {
                setTimeout(() => {
                    setDisable(false);
                }, FREEZE);
            };

            changeStateAfterTimeout();

            return () => {
                clearTimeout(changeStateAfterTimeout);
            };
        }

    }, [isFreezed, freeze]);

    return (
        <button
            className={`py-2 px-5 rounded-lg text-base w-full ${className}`}
            onClick={handleClick}
            disabled={disabled || isFreezed}
            type={type}
            title={title}
        >
            {children}
        </button>
    );
}
