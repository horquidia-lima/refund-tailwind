import foodSvg from '../assets/food.svg'
import otherSvg from '../assets/others.svg'
import servicesSvg from '../assets/services.svg'
import transportSvg from '../assets/transport.svg'
import accoodationSvg from '../assets/accommodation.svg'

export const CATEGORIES = {
    food: {
        name: 'Alimentação',
        icon: foodSvg
    },
    other: {
        name: 'Outros',
        icon: otherSvg
    },
    services: {
        name: 'Servicos',
        icon: servicesSvg
    },
    transport: {
        name: 'Transporte',
        icon: transportSvg
    },
    accoodation: {
        name: 'Hospedagem',
        icon: accoodationSvg
    },
}

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>