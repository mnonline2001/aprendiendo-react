import {render, screen} from "@testing-library/react";
import {LoginForm} from "../../../src/sections/auth/LoginForm";
import userEvent from "@testing-library/user-event";


describe('testing Login Form', function () {
    it('should show the component', async function () {
        render(<LoginForm/>)

        const email = await screen.findByLabelText(/Correo electrónico/i)
        await userEvent.type(email, 'ingrid@hotamil.com');

        const password = await screen.findByLabelText(/Contraseña/i)
        await userEvent.type(password, '123456');

        const button = await screen.findByRole( "button", { name: /Iniciar sección/i } )
        await userEvent.click(button);
    });
});

