import { Layout } from '@ui-kitten/components'
import styl from './Container.style'
import { StyleHTMLAttributes } from 'react'

function Container({
    children,
    style,
}: {
    children: any
    style: StyleHTMLAttributes<Layout>
}) {
    return <Layout style={{ ...styl.Container, ...style }}>{children}</Layout>
}

export default Container
