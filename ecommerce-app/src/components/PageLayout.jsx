import React from 'react'

const PageLayout = ({ header, footer, children }) => {
    return (
        <div>
            <header>{header}</header>
            {children}
            <footer>{footer}</footer>
        </div>
    )
}

export default PageLayout