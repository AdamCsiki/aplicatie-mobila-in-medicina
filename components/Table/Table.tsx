import { Layout, Text } from '@ui-kitten/components'
import HeadingAndContent from '../HeadingAndContent/HeadingAndContent'
import style from './Table.style'
import React from 'react'
import Spacer from '../Spacer/Spacer'

function DataTable({ labels, data }: { labels: any[]; data: any[] }) {
    if (labels.length != data.length) {
        return (
            <Layout>
                <Text>Something went wrong with the data and labels</Text>
            </Layout>
        )
    }

    return (
        <Layout style={style.Table}>
            {data.map((value, index) => (
                <Layout key={index}>
                    <HeadingAndContent title={labels[index]} content={value} />
                    <Spacer />
                </Layout>
            ))}
        </Layout>
    )
}

export default DataTable
