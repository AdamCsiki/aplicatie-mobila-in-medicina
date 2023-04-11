import { Button, Input, Layout, Text, useTheme } from '@ui-kitten/components'
import CheckBox from 'expo-checkbox'
import React, { useEffect, useState } from 'react'
import style from './SetupScreen.style'
import Slider from '../../components/Slider/Slider'
import Spacer from '../../components/Spacer/Spacer'
import { useDispatch } from 'react-redux'
import { setMaxMacros } from '../../redux/actions/dietActions'
import debounce from '../../misc/debouncer'

function SetupScreen() {
    const theme = useTheme()
    const dispatch = useDispatch()

    const sliderDelay = 100
    const inputDelay = 500

    const [auto, setAuto] = useState(false)

    const [cals, setCals] = useState(1000)
    const [macros, setMacros] = useState({ carbs: 0, fats: 0, proteins: 0 })

    const [ratios, setRatios] = useState({
        carbs: 0.4,
        fats: 0.3,
        proteins: 0.3,
    })

    const onChangeRatios = (name: string, value: string) => {
        console.log(ratios)
        setRatios((old) => ({
            ...old,
            [name]: (Number.parseInt(value) / 100).toFixed(2),
        }))
    }

    // ! Update the macros if it's on AUTO mode
    // * it updates based on changes upon Calories or Ratios
    useEffect(() => {
        if (!auto) {
            return
        }
        setMacros((old) => ({
            carbs: calculateCarbGrams(),
            fats: calculateFatGrams(),
            proteins: calculateProteinGrams(),
        }))
    }, [cals, ratios])

    const onChangeMacros = (
        type: 'carbs' | 'fats' | 'proteins',
        value: number
    ) => {
        if (auto) {
            return
        }
        console.log(macros)
        setMacros((old) => ({ ...old, [type]: value }))
    }

    const calculateProteinGrams = () => {
        const gramsPerCal = 0.25
        return Number.parseFloat(
            (ratios.proteins * cals * gramsPerCal).toFixed(2)
        )
    }

    const calculateCarbGrams = () => {
        const gramsPerCal = 0.25
        return Number.parseFloat((ratios.carbs * cals * gramsPerCal).toFixed(2))
    }

    const calculateFatGrams = () => {
        const gramsPerCal = 0.11
        return Number.parseFloat((ratios.fats * cals * gramsPerCal).toFixed(2))
    }

    const onAutoChange = () => {
        setMacros({
            carbs: calculateCarbGrams(),
            fats: calculateFatGrams(),
            proteins: calculateProteinGrams(),
        })
    }

    const onSubmit = () => {
        setMaxMacros({
            maxCals: cals,
            maxCarbs: macros.carbs,
            maxFats: macros.fats,
            maxProteins: macros.proteins,
        }).then((action) => {
            dispatch(action)
        })
    }

    return (
        <Layout style={style.SetupScreen}>
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
                            onChangeText={debounce((value) => {
                                onChangeRatios('carbs', value)
                            }, inputDelay)}
                            defaultValue={`${ratios.carbs * 100}`}
                        />
                        <Text category={'h5'}>/</Text>
                        <Input
                            size={'small'}
                            placeholder={'Fats'}
                            onChangeText={debounce((value) => {
                                onChangeRatios('fats', value)
                            }, inputDelay)}
                            defaultValue={`${ratios.fats * 100}`}
                        />
                        <Text category={'h5'}>/</Text>
                        <Input
                            size={'small'}
                            placeholder={'Prot'}
                            onChangeText={debounce((value) => {
                                onChangeRatios('proteins', value)
                            }, inputDelay)}
                            defaultValue={`${ratios.proteins * 100}`}
                        />
                    </Layout>
                </>
            )}
            <Spacer />
            <Layout style={style.Container}>
                <Layout style={style.ContainerHeader}>
                    <Text category={'h5'}>Calories</Text>
                    <Input
                        size={'small'}
                        defaultValue={`${cals}`}
                        onChangeText={debounce((text) => {
                            setCals(Number.parseInt(text))
                            if (auto) {
                                onAutoChange()
                            }
                        }, inputDelay)}
                    />
                </Layout>
                <Spacer />
                <Slider
                    renderThumbComponent={() => (
                        <Text style={{ bottom: 20 }}>{cals}</Text>
                    )}
                    startFromZero={true}
                    step={1}
                    minimumValue={0}
                    maximumValue={3000}
                    value={cals}
                    onValueChange={debounce((value) => {
                        setCals(value[0])
                    }, sliderDelay)}
                    animationType={'timing'}
                />
            </Layout>
            <Spacer />
            <Layout style={style.Container}>
                <Layout style={style.ContainerHeader}>
                    <Text category={'h5'}>Carbohydrates</Text>
                    <Input
                        size={'small'}
                        defaultValue={`${macros.carbs}`}
                        disabled={auto}
                        onChangeText={debounce((text) => {
                            onChangeMacros('carbs', Number.parseFloat(text))
                        }, inputDelay)}
                    />
                </Layout>
                <Spacer />
                <Slider
                    disabled={auto}
                    renderThumbComponent={() => (
                        <Text style={{ bottom: 20 }}>{macros.carbs}g</Text>
                    )}
                    startFromZero={true}
                    step={1}
                    minimumValue={0}
                    minimumTrackTintColor={theme['color-success-500']}
                    maximumValue={3000}
                    value={macros.carbs}
                    onValueChange={debounce(
                        (value) => onChangeMacros('carbs', value[0]),
                        sliderDelay
                    )}
                    animationType={'spring'}
                />
            </Layout>

            <Spacer />
            <Layout style={style.Container}>
                <Layout style={style.ContainerHeader}>
                    <Text category={'h5'}>Fats</Text>
                    <Input
                        size={'small'}
                        defaultValue={`${macros.fats}`}
                        disabled={auto}
                        onChangeText={debounce((text) => {
                            onChangeMacros('fats', Number.parseFloat(text))
                        }, inputDelay)}
                    />
                </Layout>
                <Spacer />
                <Slider
                    disabled={auto}
                    renderThumbComponent={() => (
                        <Text style={{ bottom: 20 }}>{macros.fats}g</Text>
                    )}
                    startFromZero={true}
                    step={1}
                    minimumValue={0}
                    minimumTrackTintColor={theme['color-warning-500']}
                    maximumValue={3000}
                    value={macros.fats.valueOf()}
                    onValueChange={debounce(
                        (value) => onChangeMacros('fats', value),
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
                        defaultValue={`${macros.proteins}`}
                        disabled={auto}
                        onChangeText={debounce((text) => {
                            onChangeMacros('proteins', Number.parseFloat(text))
                        }, inputDelay)}
                    />
                </Layout>
                <Spacer />
                <Slider
                    disabled={auto}
                    renderThumbComponent={() => (
                        <Text style={{ bottom: 20 }}>
                            {macros.proteins.valueOf()}g
                        </Text>
                    )}
                    startFromZero={true}
                    step={1}
                    minimumValue={0}
                    minimumTrackTintColor={theme['color-danger-500']}
                    maximumValue={3000}
                    value={macros.proteins.valueOf()}
                    onValueChange={debounce(
                        (value) => onChangeMacros('proteins', value),
                        sliderDelay
                    )}
                    animationType={'timing'}
                />
            </Layout>

            <Spacer height={32} />

            <Button onPress={onSubmit}>Finish</Button>
        </Layout>
    )
}

export default SetupScreen
