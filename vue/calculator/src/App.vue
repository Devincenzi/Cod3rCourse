<template>
    <div id="app">
        <h1>Calculadora</h1>
        <Calculator/>
    </div>
</template>

<script>
import Calculator from './main/V-Calculator.vue';

export default {
    components: { Calculator }
}
</script>

<style>
body {
    margin: 0;
}

#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;

    background: linear-gradient(to right, rgb(63, 64, 78), rgb(41, 46, 73));
}
</style>