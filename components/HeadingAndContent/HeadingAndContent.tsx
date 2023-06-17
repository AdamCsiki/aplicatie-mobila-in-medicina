import style from './HeadingAndContent.style'
import { Layout, Text } from '@ui-kitten/components'
import { LiteralUnion } from '@ui-kitten/components/devsupport'

function HeadingAndContent({
    title,
    category,
    content,
    horizontal = true,
}: {
    title: string
    category?: LiteralUnion<
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 's1'
        | 's2'
        | 'p1'
        | 'p2'
        | 'c1'
        | 'c2'
        | 'label'
    >
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
                category={category ?? 'p1'}
                style={{
                    ...style.SpaceBetween,
                    width: horizontal ? '60%' : '100%',
                    textAlign: horizontal ? 'left' : 'center',
                }}
            >
                {title}
            </Text>
            <Text
                category={category ?? 'p1'}
                style={{
                    ...style.Content,
                    width: horizontal ? '40%' : '100%',
                    textAlign: horizontal ? 'right' : 'center',
                }}
            >
                {content}
            </Text>
        </Layout>
    )
}

export default HeadingAndContent
