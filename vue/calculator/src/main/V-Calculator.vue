<template>
    <div class="calculator">
        <Display :value="displayValue"/>
        <Button label='AC' :triple="true" @onButtonClick='clearMemory'/>
        <Button label='/' :operation="true" @onButtonClick='setOperation'/>
        <Button label='7' @onButtonClick='addDigit'/>
        <Button label='8' @onButtonClick='addDigit'/>
        <Button label='9' @onButtonClick='addDigit'/>
        <Button label='*' :operation="true" @onButtonClick='setOperation'/>
        <Button label='4' @onButtonClick='addDigit'/>
        <Button label='5' @onButtonClick='addDigit'/>
        <Button label='6' @onButtonClick='addDigit'/>
        <Button label='-' :operation="true" @onButtonClick='setOperation'/>
        <Button label='1' @onButtonClick='addDigit'/>
        <Button label='2' @onButtonClick='addDigit'/>
        <Button label='3' @onButtonClick='addDigit'/>
        <Button label='+' :operation="true" @onButtonClick='setOperation'/>
        <Button label='0' :double="true" @onButtonClick='addDigit'/>
        <Button label='.' @onButtonClick='addDigit'/>
        <Button label='=' :operation="true" @onButtonClick='setOperation'/>
    </div>
</template>

<script>
import Display from '../components/V-Display.vue';
import Button from '../components/V-Button.vue';

export default {
    data: function(){
        return {
            displayValue: '0',
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            currentIndex: 0
        }
    },
    components: { Button, Display },
    methods: {
        clearMemory(){
            Object.assign(this.$data, this.$options.data())
        },
        setOperation(operation){
            if(this.currentIndex === 0){
                this.operation = operation;
                this.currentIndex = 1;
                this.clearDisplay = true;
            }else{
                const equals = operation === "=";
                const currentOperation = this.operation;

                try{
                    this.values[0] = this.processCalc(this.values[0], currentOperation, this.values[1]);
                }catch(e){
                    this.$emit('onError', e);
                }

                this.values[1] = 0;
                this.displayValue = this.values[0];
                this.operation = equals ? null : operation;
                this.currentIndex = equals ? 0 : 1;
                this.clearDisplay = !equals;
            }
        },
        addDigit(digit){
            if(digit === '.' && this.displayValue.includes('.')){
                return;
            }

            const clearDisplay = this.displayValue === "0" || this.clearDisplay;
            const currentValue = clearDisplay ? "" : this.displayValue;
            const displayValue = currentValue + digit;

            this.displayValue = displayValue;
            this.values[this.currentIndex] = parseFloat(displayValue);
        },
        processCalc(a, op, b){
            switch(op){
                case '+':
                    return a + b;
                case '-':
                    return a - b;
                case '*':
                    return a * b;
                case '/':
                    return a / b;
                default:
                    return '9001009';
            }
        }
    }
}
</script>

<style>
.calculator{
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>