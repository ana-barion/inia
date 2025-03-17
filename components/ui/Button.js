"use client";

/**
 * A reusable button component
 * @param {string} variant - The button style (primary, secondary, etc.)
 * @param {string} size - The button size (small, medium, large)
 * @param {function} onClick - Click handler function
 * @param {React.ReactNode} children - Button content
 */
export default function Button({
  variant = "primary",
  size = "medium",
  onClick,
  children,
}) {
  // Build class names based on props
  const classes = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
    sizes: {
      small: "px-2 py-1 text-sm",
      medium: "px-4 py-2",
      large: "px-6 py-3 text-lg",
    },
  };

  return (
    <button
      className={`rounded ${classes[variant]} ${classes.sizes[size]} transition-colors`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
