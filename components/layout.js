import Head from 'next/head'
import React from 'react'

export default function Layout(prop) {    
    return (
        <div>
            <Head>
                <title>{prop.title}</title>
            </Head>
        </div>
    )
}

Layout.defaultProps = {
    title:'Event App',
}