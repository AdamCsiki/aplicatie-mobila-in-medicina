import SetupService from '../../services/SetupService'

export const setupIsDone = () => {
    return SetupService.setupIsDone()
}

export const isSetupDone = () => {
    return SetupService.isSetupDone()
}
