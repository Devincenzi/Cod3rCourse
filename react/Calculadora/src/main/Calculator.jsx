import React, {Component} from "react";
import './Calculator.css'

import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    currentIndex: 0
}

export default class Calculator extends Component{
    state = {...initialState};
    
    constructor(props){
        super(props);
        
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory(){
        this.setState({...initialState});
    }

    setOperation(operation){
        if(this.state.currentIndex == 0){
            this.setState({operation, currentIndex: 1, clearDisplay: true});
        }else{
            const equals = operation === '=';
            const currentOperation = this.state.operation;

            const values = [...this.state.values];
            values[0] = this.processCalculation(values[0], values[1], currentOperation);
            values[1] = 0;

            const nextOperation = equals ? null : operation;
            const nextIndex = equals ? 0 : 1;

            this.setState({displayValue: values[0], operation: nextOperation,  currentIndex: nextIndex, clearDisplay: !equals, values})
        }
    }

    addDigit(n){
        if(n === '.' && this.state.displayValue.includes('.')){ return; }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currenteValue = clearDisplay ? '' : this.state.displayValue;

        const value = currenteValue + n;
        this.setState({displayValue: value, clearDisplay: false});

        if(n !== '.'){
            const i = this.state.currentIndex;
            const newValue = parseFloat(value);
            const newValues = [...this.state.values];
            newValues[i] = newValue;

            this.setState({values: newValues});
            console.log(newValues);
        }
    }

    processCalculation(val1, val2, operator){
        const v1 = parseFloat(val1);
        const v2 = parseFloat(val2);

        switch (operator){
            case '+':
                return v1 + v2;
            break;
            case '-':
                return v1 - v2;
            break;
            case '*':
                return v1 * v2;
            break;
            case '/':
                return v1 / v2;
            break;

            default:
                return 0;
            break;
        }
    }

    render(){
        return(
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button classes='triple' label='AC' click={this.clearMemory}/>
                <Button classes='operation' label='/' click={this.setOperation}/>
                <Button label='7' click={this.addDigit}/>
                <Button label='8' click={this.addDigit}/>
                <Button label='9' click={this.addDigit}/>
                <Button classes='operation' label='*' click={this.setOperation}/>
                <Button label='4' click={this.addDigit}/>
                <Button label='5' click={this.addDigit}/>
                <Button label='6' click={this.addDigit}/>
                <Button classes='operation' label='-' click={this.setOperation}/>
                <Button label='1' click={this.addDigit}/>
                <Button label='2' click={this.addDigit}/>
                <Button label='3' click={this.addDigit}/>
                <Button classes='operation' label='+' click={this.setOperation}/>
                <Button classes='double' label='0' click={this.addDigit}/>
                <Button label='.' click={this.addDigit}/>
                <Button classes='operation' label='=' click={this.setOperation}/>
            </div>
        )
    }
}