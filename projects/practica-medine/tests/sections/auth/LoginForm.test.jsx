import {render, screen} from "@testing-library/react";

describe('testing Login Form', function () {
    it('should show the component', function () {
        render()
        expect(screen.getByAltText("Correo electrónico")).toBeDefined()
    });
});
