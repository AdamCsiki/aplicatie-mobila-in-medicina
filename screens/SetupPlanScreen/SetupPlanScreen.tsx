import gstyle from '../../styles/global-style'
import { Button, Layout, Text } from '@ui-kitten/components'
import Spacer from '../../components/Spacer/Spacer'
import Select from '../../components/Select/Select'
import {
    DAILY_EXERCISE,
    EXERCISE_ACTIVITY_TYPE,
    EXTREME_EXERCISE,
    INTENSE_EXERCISE,
    LIGHT_EXERCISE,
    SEDENTARY,
} from '../../misc/MacroTypes'
import { setCurrentActivity } from '../../redux/actions/bodyActions'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

function SetupPlanScreen(props: any) {
    const body = useSelector((state: RootState) => state.body)
    const dispatch = useDispatch()

    const [activity, setActivity] = useState<EXERCISE_ACTIVITY_TYPE>(undefined)

    const onSubmit = () => {
        setCurrentActivity(activity)
            .then((action) => {
                dispatch(action)
            })
            .finally(props.onDone)
    }

    return (
        <Layout style={gstyle.Container}>
            <Layout style={gstyle.Header}>
                <Text category={'h5'}>Edit</Text>
                <Button size={'small'} onPress={props.onClose}>
                    x
                </Button>
            </Layout>

            <Spacer height={32} />

            <Layout style={gstyle.Header}>
                <Text category={'h6'}>Activity: </Text>
                <Select
                    defaultValue={body.activity}
                    data={[
                        SEDENTARY,
                        LIGHT_EXERCISE,
                        DAILY_EXERCISE,
                        INTENSE_EXERCISE,
                        EXTREME_EXERCISE,
                    ]}
                    onSelect={(selectedItem) => {
                        setActivity(selectedItem)
                    }}
                />
            </Layout>

            <Spacer height={32} />

            <Layout style={gstyle.Header}>
                <Button onPress={props.onCancel}>Cancel</Button>
                <Button onPress={onSubmit}>Done</Button>
            </Layout>
        </Layout>
    )
}

export default SetupPlanScreen
