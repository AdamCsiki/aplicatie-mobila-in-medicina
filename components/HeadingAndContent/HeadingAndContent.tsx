import style from './HeadingAndContent.style'
import { Layout, Text } from '@ui-kitten/components'

function HeadingAndContent({
    title,
    content,
    horizontal = true,
}: {
    title: string
    content: string | number | undefined
    horizontal?: boolean
}) {
    return (
        <Layout
            style={{
                ...style.HeadingAndContent,
                flexDirection: horizontal ? 'row' : 'column',
            }}
        >
            <Text
                category={'h6'}
                style={{
                    ...style.Heading,
                    width: horizontal ? '50%' : '100%',
                    textAlign: horizontal ? 'left' : 'center',
                }}
            >
                {title}
            </Text>
            <Text
                category={'c1'}
                style={{
                    ...style.Content,
                    width: horizontal ? '50%' : '100%',
                    textAlign: horizontal ? 'right' : 'center',
                }}
            >
                {content}
            </Text>
        </Layout>
    )
}

export default HeadingAndContent
