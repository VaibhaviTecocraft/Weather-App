import React from 'react'

function Container({children}) {
    return (
        <div className='md:max-w-[992px] sm:max-w-[768px] xs:max-w-[575px] max-w-full xs:px-[15px] xs-max:px-[15px] w-full mx-auto'>
            {children}
        </div>
    )
}

export default Container
