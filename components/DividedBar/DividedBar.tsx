import { Layout, useTheme } from '@ui-kitten/components'
import { useEffect, useState } from 'react'
import style from './DividedBar.style'

function DividedBar({ divisions }: { divisions: number[] }) {
    const theme = useTheme()
    const colors = [
        theme['color-success-500'],
        theme['color-warning-500'],
        theme['color-danger-500'],
    ]

    return (
        <Layout style={style.DividedBar}>
            {divisions.map((div) => {
                return (
                    <Layout
                        key={Math.random()}
                        style={{
                            width:
                                (div /
                                    divisions.reduce(
                                        (sum, num) => sum + num,
                                        0
                                    )) *
                                    100 +
                                '%',
                            height: 16,
                            backgroundColor: colors.pop(),
                        }}
                    ></Layout>
                )
            })}
        </Layout>
    )
}

export default DividedBar
