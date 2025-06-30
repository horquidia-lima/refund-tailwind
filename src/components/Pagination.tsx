import leftSvg from '../assets/left.svg'
import rightSvg from '../assets/right.svg'

import { Button } from './Button'

type Props = {
    current: number
    total: number
}

export function Pagination({current, total}: Props){
    return (
        <div className='flex flex-1 justify-center items-center gap-4'>
            <Button variant='icon'>
                <img src={leftSvg} alt="Icone de voltar" />
            </Button>
            <span className='text-sm text-gray-200'>
                {current}/{total}
            </span>
            <Button variant='icon'>
                <img src={rightSvg} alt="Icone de avancar" />
            </Button>
        </div>
    )
}