import {render, screen} from "@testing-library/react";
import {LoginForm} from "../../../src/sections/auth/LoginForm";


describe('testing Login Form', function () {
    it('should show the component', async function () {
        render(<LoginForm/>)
        expect(await screen.findByLabelText(/Correo electrónico/i)).toBeDefined()
        expect(await screen.findByLabelText(/Contraseña/i)).toBeDefined()

        expect(await screen.findByRole( "button", { name: /Iniciar sección/i } )).toBeDefined()
    });
});

