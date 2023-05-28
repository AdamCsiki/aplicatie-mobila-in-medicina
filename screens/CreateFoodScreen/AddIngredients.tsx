import { Button, Input, Layout, Text } from '@ui-kitten/components'
import style from './CreateFoodScreen.style'
import Spacer from '../../components/Spacer/Spacer'
import SearchList from '../../components/SearchList/SearchList'
import SearchFoodItem from '../../components/SearchFoodItem/SearchFoodItem'
import { getAllFoods, searchFoods } from '../../redux/actions/searchActions'
import { useState } from 'react'
import FoodModel from '../../models/FoodModel'

function AddIngredients() {
    return <Layout></Layout>
}

export default AddIngredients
