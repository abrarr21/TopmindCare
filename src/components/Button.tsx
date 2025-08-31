import type React from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: ButtonVariant;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
    children,
    className = "",
    variant = "primary",
    onClick,
}) => {
    const baseClasses = "px-4 py-2 rounded-lg font-medium cursor-pointer ";

    const variantClasses: Record<ButtonVariant, string> = {
        primary: "bg-violet-700 hover:bg-violet-800 text-white",
        secondary: "bg-green-400 hover:bg-green-500 text-white",
        tertiary: "bg-green-200 hover:bg-green-500 text-white",
    };

    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

    return (
        <button className={buttonClasses} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
