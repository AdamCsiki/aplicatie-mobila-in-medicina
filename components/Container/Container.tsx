import { Layout } from '@ui-kitten/components'
import styles from './Container.style'

function Container({
    children,
    style,
    level = '1',
}: {
    children?: any
    style?: any
    level?: '1' | '2' | '3' | '4'
}) {
    return (
        <Layout style={[styles.Container, style]} level={level}>
            {children}
        </Layout>
    )
}

export default Container
