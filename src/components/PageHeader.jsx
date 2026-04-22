export default function PageHeader({ title, breadcrumb, children }) {
    const breadcrumbItems = Array.isArray(breadcrumb)
        ? breadcrumb
        : breadcrumb
        ? [breadcrumb]
        : [];

    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold">
                    {title}
                </span>
                {breadcrumbItems.length > 0 && (
                    <div
                        id="breadcrumb-links"
                        className="flex items-center font-medium space-x-2 mt-2"
                    >
                        {breadcrumbItems.map((item, index) => (
                            <span key={index} className="flex items-center space-x-2">
                                {index > 0 && (
                                    <span className="text-gray-500">/</span>
                                )}
                                <span
                                    className={
                                        index === breadcrumbItems.length - 1
                                            ? "text-gray-800 font-semibold"
                                            : "text-gray-500"
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
                <div id="action-button">
                    {children}
                </div>
            )}
        </div>
    );
}
