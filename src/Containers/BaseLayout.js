import React from 'react'
import { useMachine } from '@xstate/react'
import {Nav} from '../Components/Nav'
import bookingMachine from '../Machines/bookingMachine'
import { StepsLayout } from './StepsLayout'

export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine)

  console.log('nuestra maquina', state.context, state.value)

  return(
    <div className='BaseLayout'>
      <Nav state={state} send={send}/>
      <StepsLayout state={state} send={send}/>
    </div>
  )
}