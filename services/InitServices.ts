import DietServices from './DietServices'

class InitServices {
    init() {
        DietServices.calculateMacros()
    }
}

export default new InitServices()
