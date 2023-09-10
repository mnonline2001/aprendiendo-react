import {render, screen} from "@testing-library/react";
import {LoginForm} from "../../../src/sections/auth/LoginForm";


describe('testing Login Form', function () {
    it('should show the component', function () {
        render(<LoginForm/>)
        expect(screen.getByLabelText("Correo electrónico")).toBeDefined()
        expect(screen.getByLabelText("Contraseña")).toBeDefined()

        expect(screen.getByRole( "button", { name: "Iniciar sección" } )).toBeDefined()
    });
});

