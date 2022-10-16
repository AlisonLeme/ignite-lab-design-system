import { InputHTMLAttributes, ReactNode } from 'react'
import {clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className='flex items-center gap-3 py-4 px-3 h-12 rounded bg-gray-800 focus-within:ring-2 w-full ring-cyan-300'>
            {props.children}
        </div>
    )
}

// alterar o nome de como vai aparecer no dom
TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
    children: ReactNode
}

function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
}

// alterar o nome de como vai aparecer no dom
TextInputIcon.displayName = 'TextInput.Icon'

// Pegando todas as propriedades do input com elementos do HTML tradicional 
export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input className={'bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400'}
            {...props}
        />
    )
}

// alterar o nome de como vai aparecer no doom
TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}