import { Button, Input, Layout, Text, useTheme } from '@ui-kitten/components'
import CheckBox from 'expo-checkbox'
import React, { useEffect, useState } from 'react'
import style from './SetupMacroScreen.style'
import Slider, { SliderThumb } from '../../components/Slider/Slider'
import Spacer from '../../components/Spacer/Spacer'
import { useDispatch, useSelector } from 'react-redux'
import {
    setMacroRatios,
    setMaxMacros,
    setupIsDone,
} from '../../redux/actions/dietActions'
import { RootState } from '../../redux/store'
import { MacroRatioModel } from '../../models/MacroRatioModel'
import { ScrollView } from 'react-native-virtualized-view'
import debounce from '../../misc/debouncer'

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

    const [auto, setAuto] = useState(false)

    const [maxCals, setMaxCals] = useState<number>(diet.maxCals)
    const [maxCarbs, setMaxCarbs] = useState<number>(diet.maxCarbs)
    const [maxFats, setMaxFats] = useState<number>(diet.maxFats)
    const [maxProteins, setMaxProteins] = useState<number>(diet.maxProteins)

    const [ratios, setRatios] = useState<MacroRatioModel>(diet.macroRatios)

    const calculateProteinGrams = () => {
        const gramsPerCal = 0.25
        return Number.parseFloat(
            (ratios.proteins * maxCals * gramsPerCal).toFixed(2)
        )
    }

    const calculateCarbGrams = () => {
        const gramsPerCal = 0.25
        return Number.parseFloat(
            (ratios.carbs * maxCals * gramsPerCal).toFixed(2)
        )
    }

    const calculateFatGrams = () => {
        const gramsPerCal = 0.11
        return Number.parseFloat(
            (ratios.fats * maxCals * gramsPerCal).toFixed(2)
        )
    }

    const onChangeRatios = (name: string, value: number) => {
        setRatios((old) => ({
            ...old,
            [name]: (value / 100).toFixed(2),
        }))
    }

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
        setMaxCarbs(calculateCarbGrams())
        setMaxFats(calculateFatGrams())
        setMaxProteins(calculateProteinGrams())
    }

    const onSubmit = () => {
        setMacroRatios(ratios).then((action) => {
            dispatch(action)
        })
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
    }, [maxCals, ratios, auto])

    return (
        <Layout
            style={{
                ...style.SetupScreen,
            }}
        >
            <Layout style={style.Container}>
                <Layout style={style.ContainerHeader}>
                    <Text category={'h5'}>Calories</Text>
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
                    maximumValue={body.maxCalsByBody}
                    onValueChange={debounce((value) => {
                        setMaxCals(value[0])
                    }, sliderDelay)}
                    animationType={'timing'}
                />
            </Layout>
            <Spacer height={32} />
            <Layout style={style.RatioContainer}>
                <Text style={{ paddingRight: 8 }}>Auto by ratios</Text>
                <CheckBox value={auto} onValueChange={setAuto} />
            </Layout>
            {auto && (
                <>
                    <Spacer />
                    <Layout style={style.RatioContainer}>
                        <Input
                            size={'small'}
                            placeholder={'Carb'}
                            onChangeText={(value) => {
                                onChangeRatios(
                                    'carbs',
                                    Number.parseInt(value) || 0
                                )
                            }}
                            defaultValue={`${ratios.carbs * 100}`}
                        />
                        <Text category={'h5'}>/</Text>
                        <Input
                            size={'small'}
                            placeholder={'Fats'}
                            onChangeText={(value) => {
                                onChangeRatios(
                                    'fats',
                                    Number.parseInt(value) || 0
                                )
                            }}
                            defaultValue={`${ratios.fats * 100}`}
                        />
                        <Text category={'h5'}>/</Text>
                        <Input
                            size={'small'}
                            placeholder={'Prot'}
                            onChangeText={(value) => {
                                onChangeRatios(
                                    'proteins',
                                    Number.parseInt(value) || 0
                                )
                            }}
                            defaultValue={`${ratios.proteins * 100}`}
                        />
                    </Layout>
                </>
            )}
            <Spacer />
            <Layout style={style.Container}>
                <Layout style={style.ContainerHeader}>
                    <Text category={'h5'}>Carbohydrates</Text>
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
                    <Text category={'h5'}>Fats</Text>
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
                    <Text category={'h5'}>Proteins</Text>
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
                            navigation.navigate('SetupBody')
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
