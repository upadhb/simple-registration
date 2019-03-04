<template>
    <div id="app">
        <registration-page></registration-page>
    </div>
</template>

<script>
    import RegistrationPage from './components/RegistrationPage.vue'

    export default {
        name: 'app',
        components: {
            RegistrationPage,
        }
    }
</script>

<style>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin-top: 20px;
    }

    * {
        box-sizing: border-box;
    }
</style>
