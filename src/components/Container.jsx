import React from 'react'

const Container = ({ children, design }) => {
    return (
        <div className={`${design} mx-auto max-w-[1440px] p-5`}>{children}</div>
    )
}

export default Container;