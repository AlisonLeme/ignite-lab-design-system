import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest'
import { rest } from 'msw'
import { SignIn } from "./SignIn";

export default {
    title: 'Pages/SignIn',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: { // "Mocando" a rota sessions
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Login Realizado!'
                    }))
                })
            ]
        }
    }
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Digite o seu e-mail'), 'alison@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('*********'), 'alison123')

        userEvent.click(canvas.getByRole('button'))

        // O waitFor fica rodando esse código várias vezes até ele passar no teste
        await waitFor(() => {
            return (
                expect(canvas.getByText('Login Realizado!')).toBeInTheDocument()
            )
        })

    }
}