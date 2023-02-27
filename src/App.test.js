import { fireEvent, render } from "@testing-library/react";
import App, { DEFAULT_HEADER } from "./App";

describe("Приложение Greetings!", ()=> {

    test("Ввод произвольного текста", () => {
        const view = render(<App />);
        const input = view.getByTestId('user-input');
    
        fireEvent.change(input, { target: { value: 'Привет!' } });
    
        expect(input.value).toBe('Привет!');
    });
    
    test("Отправка значения", () => {
        const view = render(<App />);

        const input = view.getByTestId('user-input');
        const header = view.getByTestId('header');
        const submitButton = view.getByTestId('submit-btn');

    
        fireEvent.change(input, { target: { value: 'Привет!' } });
        fireEvent.click(submitButton);
    
        expect(header.textContent).toBe('Привет!');
    });

    test("Очищение заголовка до значения по умолчанию.", () => {
        const view = render(<App />);
        const header = view.getByTestId('header');
        const input = view.getByTestId('user-input');
        const resetButton = view.getByTestId('reset-btn');

        fireEvent.click(resetButton);

        expect(header.textContent).toBe(DEFAULT_HEADER);
        expect(input.textContent).toBe("");
    });

    test("Заголовок никогда не пустой.", () => {
        const view = render(<App />);

        const input = view.getByTestId('user-input');
        const header = view.getByTestId('header');
        const submitButton = view.getByTestId('submit-btn');

        const previosHeaderValue = header.textContent;

        fireEvent.change(input, { target: { value: '' } });
        fireEvent.click(submitButton);

        expect(header.textContent).toBe(previosHeaderValue);
    });

})