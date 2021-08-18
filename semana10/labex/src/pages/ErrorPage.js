import React from 'react'
import styled from 'styled-components'

const ErrorPageGiphy = styled.div`
    iframe{
        box-sizing: border-box;
        width:100%;
        height:100;
        margin-top: 80px;
    }
`

export default function ErrorPage() {
    return (
        <ErrorPageGiphy>
            <iframe src="https://giphy.com/embed/OZeWzZalgU5XNyHAqh" width="1024" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </ErrorPageGiphy>
    )
}