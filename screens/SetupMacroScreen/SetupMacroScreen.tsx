import { Button, Input, Layout, Text, useTheme } from '@ui-kitten/components'
import CheckBox from 'expo-checkbox'
import React, { useEffect, useState } from 'react'
import style from './SetupMacroScreen.style'
import Slider from '../../components/Slider/Slider'
import Spacer from '../../components/Spacer/Spacer'
import { useDispatch, useSelector } from 'react-redux'
import { setMaxMacros } from '../../redux/actions/dietActions'
import { RootState } from '../../redux/store'
import debounce from '../../misc/debouncer'
import { setupIsDone } from '../../redux/actions/setupActions'
import {
    calculateGramsOfCarbohydratesByCalories,
    calculateGramsOfFatByCalories,
    calculateGramsOfProteinByCalories,
} from '../../misc/macronutrientCalories'
import { getBodyInfo } from '../../redux/actions/bodyActions'

function SetupMacroScreen({
    navigation,
    onBack,
    afterSubmit,
}: {
    navigation?: any
    onBack?: () => void
    afterSubmit?: () => void
}) {
    const diet = useSelector((state: RootState) => state.diet)
    const body = useSelector((state: RootState) => state.body)

    const theme = useTheme()
    const dispatch = useDispatch()

    const sliderDelay = 100
    const inputDelay = 500

    const [auto, setAuto] = useState(true)

    const [maxCals, setMaxCals] = useState<number>(diet.maxCals)
    const [maxCarbs, setMaxCarbs] = useState<number>(diet.maxCarbs)
    const [maxFats, setMaxFats] = useState<number>(diet.maxFats)
    const [maxProteins, setMaxProteins] = useState<number>(diet.maxProteins)

    const onChangeMacros = (
        type: 'carbs' | 'fats' | 'proteins',
        value: number
    ) => {
        if (auto) {
            return
        }
        switch (type) {
            case 'carbs': {
                setMaxCarbs(value)
                break
            }
            case 'fats': {
                setMaxFats(value)
                break
            }
            case 'proteins': {
                setMaxProteins(value)
                break
            }
        }
    }

    const onAutoChange = () => {
        setMaxCarbs(calculateGramsOfCarbohydratesByCalories(maxCals))
        setMaxFats(calculateGramsOfFatByCalories(maxCals))
        setMaxProteins(calculateGramsOfProteinByCalories(maxCals))
    }

    const onSubmit = () => {
        setMaxMacros({
            maxCals: maxCals,
            maxCarbs: maxCarbs,
            maxFats: maxFats,
            maxProteins: maxProteins,
        })
            .then((action) => {
                dispatch(action)
            })
            .finally(() => {
                if (navigation) {
                    setupIsDone().then((action) => {
                        dispatch(action)
                    })
                }
                afterSubmit?.()
            })
    }

    // ! Update the macros if it's on AUTO mode
    // * it updates based on changes upon Calories or Ratios
    useEffect(() => {
        if (!auto) {
            return
        }
        onAutoChange()
    }, [maxCals, auto])

    useEffect(() => {
        getBodyInfo()
            .then((action) => {
                dispatch(action)
            })
            .finally(() => {
                if (diet.maxCals <= 0 || diet.maxCals == undefined) {
                    setMaxCals(body.recommendedCalories)
                }
            })
    }, [])

    return (
        <Layout
            style={{
                ...style.SetupScreen,
            }}
        >
            <Layout style={style.Container}>
                <Text>Recommended: {body.recommendedCalories} Kcal</Text>
                <Spacer />
                <Layout style={style.ContainerHeader}>
                    <Text category={'h6'}>Kilocalories</Text>
                    <Input
                        size={'small'}
                        value={`${maxCals}`}
                        onChangeText={(text) => {
                            setMaxCals(Number.parseInt(text) || 0)
                        }}
                    />
                </Layout>
                <Spacer />
                <Slider
                    animateTransitions={true}
                    startFromZero={true}
                    step={1}
                    value={maxCals}
                    minimumValue={0}
                    minimumTrackTintColor={theme['color-primary-500']}
                    maximumValue={3000}
                    onValueChange={debounce((value) => {
                        setMaxCals(value[0])
                    }, sliderDelay)}
                    animationType={'timing'}
                />
            </Layout>
            <Spacer height={32} />
            <Layout style={style.RatioContainer}>
                <Text style={{ paddingRight: 8 }}>Auto</Text>
                <CheckBox value={auto} onValueChange={setAuto} />
            </Layout>
            <Spacer />
            <Layout style={style.Container}>
                <Layout style={style.ContainerHeader}>
                    <Text category={'h6'}>Carbohydrates</Text>
                    <Input
                        size={'small'}
                        defaultValue={`${maxCarbs}`}
                        disabled={auto}
                        onChangeText={(text) => {
                            setMaxCarbs(Number.parseInt(text) || 0)
                        }}
                    />
                </Layout>
                <Spacer />
                <Slider
                    sign={'g'}
                    animateTransitions={true}
                    disabled={auto}
                    startFromZero={true}
                    step={1}
                    value={maxCarbs}
                    minimumValue={0}
                    minimumTrackTintColor={theme['color-success-500']}
                    maximumValue={500}
                    onValueChange={debounce(
                        (value_array) => setMaxCarbs(value_array[0]),
                        sliderDelay
                    )}
                    animationType={'timing'}
                />
            </Layout>

            <Spacer />
            <Layout style={style.Container}>
                <Layout style={style.ContainerHeader}>
                    <Text category={'h6'}>Fats</Text>
                    <Input
                        size={'small'}
                        defaultValue={`${maxFats}`}
                        disabled={auto}
                        onChangeText={(text) => {
                            setMaxCals(Number.parseInt(text) || 0)
                        }}
                    />
                </Layout>
                <Spacer />
                <Slider
                    sign={'g'}
                    animateTransitions={true}
                    disabled={auto}
                    startFromZero={true}
                    step={1}
                    value={maxFats}
                    minimumValue={0}
                    minimumTrackTintColor={theme['color-warning-500']}
                    maximumValue={500}
                    onValueChange={debounce(
                        (value) => setMaxFats(value[0]),
                        sliderDelay
                    )}
                    animationType={'timing'}
                />
            </Layout>
            <Spacer />
            <Layout style={style.Container}>
                <Layout style={style.ContainerHeader}>
                    <Text category={'h6'}>Proteins</Text>
                    <Input
                        size={'small'}
                        defaultValue={`${maxProteins}`}
                        disabled={auto}
                        onChangeText={debounce((text) => {
                            onChangeMacros('proteins', Number.parseFloat(text))
                        }, inputDelay)}
                    />
                </Layout>
                <Spacer />
                <Slider
                    sign={'g'}
                    animateTransitions={true}
                    disabled={auto}
                    startFromZero={true}
                    step={1}
                    value={maxProteins}
                    minimumValue={0}
                    minimumTrackTintColor={theme['color-danger-500']}
                    maximumValue={500}
                    onValueChange={debounce(
                        (value) => onChangeMacros('proteins', value[0]),
                        sliderDelay
                    )}
                    animationType={'timing'}
                />
            </Layout>

            <Spacer height={32} />

            <Layout style={style.ContainerHeader}>
                <Button
                    onPress={() => {
                        onBack?.()
                        if (navigation) {
                            navigation.navigate('SetupPlan')
                        }
                    }}
                >
                    Back
                </Button>
                <Button
                    onPress={() => {
                        onSubmit()
                    }}
                    style={style.Button}
                >
                    Finish
                </Button>
            </Layout>
        </Layout>
    )
}

export default SetupMacroScreen
