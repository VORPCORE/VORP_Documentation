<script setup>
import DefaultTheme from 'vitepress/theme'
import GoogleTranslateSelect from '@google-translate-select/vue3'

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #nav-bar-content-before>
            <GoogleTranslateSelect default-language-code="en" default-page-language-code="en"
                :fetch-browser-language="true" trigger="click"/>
        </template>
    </Layout>
</template>