import { useRef, useState } from 'react'

enum Operators {
    add, subtract, multiply, divide
};

export const useCalculator = () => {
    const [result, setResult] = useState('0');
    const [resultPrevious , setResultPrevious] = useState('0');

    const operation = useRef<Operators>();

    const clean = () => {
        setResult('0');
        setResultPrevious('0');
    };

    const xText = (textNumber: string) => {
        if (result.includes('.') && textNumber === '.') return;
        if (result.startsWith('0') || result.startsWith('-0')) {
            if (textNumber === '.') {
                setResult(result + textNumber);
            } else {
                if (textNumber === '0' && result.includes('.')) {
                    setResult(result + textNumber);
                } else {
                    if (textNumber !== '0' && !result.includes('.')) {
                        setResult(textNumber);
                    } else {
                        if (textNumber === '0' && !result.includes('.')) {
                            setResult(textNumber);
                        } else {
                            setResult(result + textNumber);
                        }
                    }
                }
            }
        } else {
            setResult(result + textNumber);
        }    
    };

    const positiveNegative = () => {
        if (result !== '0') {
            if (result.includes('-')) {
                setResult(result.replace('-',''));
            } else {
                setResult('-' + result);
            }
        }
    };

    const changeNumber = () => {
        if (result.endsWith('.')) {
            setResultPrevious(result.slice(0,-1));
        } else {
            setResultPrevious(result);
        }
        setResult('0');
    };

    const del = () => {
        let negative = '';
        let numberTemp = result;
        if (result.includes('-')) {
            negative = '-';
            numberTemp = result.substr(1);
        }

        if (numberTemp.length > 1) {
            setResult(negative + numberTemp.slice(0,-1));
        } else {
            setResult('0');
        }
    };

    const btnAdd = () => {
        changeNumber();
        operation.current = Operators.add;
    };
  
    const btnSubtract = () => {
        changeNumber();
        operation.current = Operators.subtract;
    };

    const btnMultiply = () => {
        changeNumber();
        operation.current = Operators.multiply;
    };

    const btnDivide = () => {
        changeNumber();
        operation.current = Operators.divide;
    };

    const calculate = () => {
        const num1 = Number(result);
        const num2 = Number(resultPrevious);

        switch (operation.current) {
            case Operators.add:
                setResult(`${num1 + num2}`);
                break;

            case Operators.subtract:
                setResult(`${num2- num1}`);
                break;

            case Operators.multiply:
                setResult(`${num1 * num2}`);
                break;

            case Operators.divide:
                setResult(`${num2 / num1}`);
                break;
            
            default:
                break;
        }
        setResultPrevious('0');
    };

    return {
        xText,
        resultPrevious,
        result,
        clean,
        positiveNegative,
        del,
        btnDivide,
        btnMultiply,
        btnSubtract,
        btnAdd,
        calculate
    }

}
