import AsyncStorage from '@react-native-async-storage/async-storage'
import { SETUP_IS_DONE, SETUP_IS_NOT_DONE } from '../redux/types/types'

class SetupService {
    isSetupDone() {
        return AsyncStorage.getItem('setupIsDone')
            .then((setupIsDone) => {
                if (!setupIsDone) {
                    return {
                        type: SETUP_IS_NOT_DONE,
                    }
                }

                return {
                    type: SETUP_IS_DONE,
                }
            })
            .catch((err) => {
                return {
                    type: SETUP_IS_NOT_DONE,
                }
            })
    }

    setupIsDone() {
        return AsyncStorage.setItem('setupIsDone', JSON.stringify(true)).then(
            () => {
                return {
                    type: SETUP_IS_DONE,
                }
            }
        )
    }
}

export default new SetupService()
