import style from './ProgressBar.style'
import { Layout, Text, useTheme } from '@ui-kitten/components'
import React from 'react'
import Spacer from '../Spacer/Spacer'

function ProgressBar({
    current = 0,
    max = 100,
    color,
    sign = '%',
}: {
    current: number
    max: number
    color?: string
    sign?: string
}) {
    const theme = useTheme()

    return (
        <Layout style={style.ProgressBarContainer}>
            <Layout style={style.ProgressBarTextContainer}>
                <Text
                    category="c1"
                    status={current > max ? 'danger' : 'basic'}
                    style={{
                        ...style.ProgressBarText,
                    }}
                >
                    {`${current} / ${max}${sign}`}
                </Text>
            </Layout>

            <Spacer height={4} />

            <Layout style={style.ProgressBarBackground} level="4">
                <Layout
                    style={[
                        style.ProgressBar,
                        {
                            width:
                                current > max
                                    ? '100%'
                                    : (current / max) * 100 + '%',
                        },
                        {
                            backgroundColor:
                                current > max
                                    ? theme['color-danger-800']
                                    : color ?? theme['color-success-400'],
                        },
                    ]}
                ></Layout>
            </Layout>
        </Layout>
    )
}

export default ProgressBar
