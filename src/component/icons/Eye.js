import React from 'react'
import { SvgIcon } from '@mui/material'
import ay from './eye.svg'

export default function Eye(props) {
    return (
    <SvgIcon {...props}>
        <path d={ay} />
      </SvgIcon>
    )
}
