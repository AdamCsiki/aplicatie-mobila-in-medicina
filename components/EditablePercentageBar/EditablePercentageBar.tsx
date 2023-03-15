import style from './EditablePercentageBar.style'
import { Layout } from '@ui-kitten/components'
import { useState } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'

function EditablePercentageBar({ percentage }: { percentage: number }) {
    const [currentPercentage, setCurrentPercentage] = useState(0)

    return (
        <Layout style={style().EditablePercentageBar}>
            <ProgressBar percentage={percentage} />
        </Layout>
    )
}

export default EditablePercentageBar
