import FullScreenModal from '../../components/FullScreenModal/FullScreenModal'
import style from '../DietScreen/DietScreent.style'
import { Button, Input, Layout, Text, useTheme } from '@ui-kitten/components'
import Spacer from '../../components/Spacer/Spacer'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { calculateMacros, setMaxMacros } from '../../redux/actions/dietActions'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserMacrosModel from '../../models/UserMacrosModel'
import { ModalProps } from '@ui-kitten/components/ui/modal/modal.component'
import { RootState } from '../../redux/store'

function MacroEditModal({
    visible,
    onClose,
}: {
    visible: boolean
    onClose: () => void
}) {
    const diet = useSelector((state: RootState) => state.diet)
    const dispatch = useDispatch()
    const theme = useTheme()

    const [auto, setAuto] = useState(false)

    const [statsForm, setStatsForm] = useState<UserMacrosModel>({
        maxCals: diet.maxCals,
        maxCarbs: diet.maxCarbs,
        maxFats: diet.maxFats,
        maxProteins: diet.maxProteins,
    } as UserMacrosModel)

    const submitStatEdit = () => {
        setMaxMacros(statsForm).then((action) => {
            dispatch(action)
        })
        calculateMacros().then((action) => {
            dispatch(action)
            onClose()
        })
    }

    return (
        <FullScreenModal
            style={style.StatContainer}
            visible={visible}
            onBackdropPress={onClose}
        >
            <Layout style={style.StatHeader}>
                <Text category={'h4'}>Edit</Text>
                <Button size={'small'} onPress={onClose}>
                    X
                </Button>
            </Layout>

            <Spacer />

            <ProgressBar
                current={diet.currentCals}
                max={statsForm.maxCals}
                sign={'Kcal'}
                color={theme['color-primary-300']}
            />
            <Spacer />
            <Input
                placeholder="Max Calories"
                keyboardType="numeric"
                onChangeText={(text) => {
                    setStatsForm((oldForm) => ({
                        ...oldForm,
                        maxCals: parseInt(text),
                    }))
                }}
            />

            <Spacer />

            <ProgressBar
                current={diet.currentCarbs}
                max={statsForm.maxCarbs}
                sign={'g'}
                color={theme['color-success-500']}
            />
            <Spacer />
            <Input
                placeholder="Max Carbohydrates"
                keyboardType="numeric"
                onChangeText={(text) => {
                    setStatsForm((oldForm) => ({
                        ...oldForm,
                        maxCarbs: parseInt(text),
                    }))
                }}
            />

            <Spacer />

            <ProgressBar
                current={diet.currentFats}
                max={statsForm.maxFats}
                sign={'g'}
                color={theme['color-warning-500']}
            />
            <Spacer />

            <Input
                placeholder="Max Fats"
                keyboardType="numeric"
                onChangeText={(text) => {
                    setStatsForm((oldForm) => ({
                        ...oldForm,
                        maxFats: parseInt(text),
                    }))
                }}
            />

            <Spacer />

            <ProgressBar
                current={diet.currentProteins}
                max={statsForm.maxProteins}
                sign={'g'}
                color={theme['color-danger-500']}
            />

            <Spacer />

            <Input
                placeholder="Max Proteins"
                keyboardType="numeric"
                onChangeText={(text) => {
                    setStatsForm((oldForm) => ({
                        ...oldForm,
                        maxProteins: parseInt(text) || 0,
                    }))
                }}
            />

            <Spacer height={16} />

            <Layout
                style={{
                    ...style.StatHeader,
                    flexGrow: 1,
                    alignItems: 'flex-end',
                }}
            >
                <Button onPress={onClose}>Cancel</Button>
                <Button
                    onPress={() => {
                        submitStatEdit()
                    }}
                    status={'success'}
                >
                    Save
                </Button>
            </Layout>
        </FullScreenModal>
    )
}

export default MacroEditModal
