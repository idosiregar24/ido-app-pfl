import React, { useEffect } from "react";

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string|string[]} props.breadcrumb
 * @param {React.ReactNode} props.children
 */
export default function PageHeader({ title, breadcrumb, children }) {
    useEffect(() => {
        if (title) {
            document.title = `${title} | Sedap Restaurant`;
        }
    }, [title]);

    const breadcrumbItems = Array.isArray(breadcrumb)
        ? breadcrumb
        : breadcrumb
            ? [breadcrumb]
            : [];

    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <h1 id="page-title" className="text-3xl font-semibold text-gray-900">
                    {title}
                </h1>
                {breadcrumbItems.length > 0 && (
                    <div
                        id="breadcrumb-links"
                        className="flex items-center font-medium space-x-2 mt-2"
                    >
                        {breadcrumbItems.map((item, index) => (
                            <span key={index} className="flex items-center space-x-2">
                                {index > 0 && (
                                    <span className="text-gray-400">/</span>
                                )}
                                <span
                                    className={
                                        index === breadcrumbItems.length - 1
                                            ? "text-gray-800 font-bold"
                                            : "text-gray-400"
                                    }
                                >
                                    {item}
                                </span>
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {children && (
                <div id="action-button" className="flex items-center">
                    {children}
                </div>
            )}
        </div>
    );
}
