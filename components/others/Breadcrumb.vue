<template>
    <div class="breadcrumb container">
        <nuxt-link rel="noopener" :title="jsonLanguage().label_home" to="/">{{ jsonLanguage().label_home }}</nuxt-link>
        <nuxt-link rel="noopener" :title="breadcrumb_one" to="" v-if="breadcrumb_one"> > <span>{{ breadcrumb_one }}</span></nuxt-link>
        <nuxt-link rel="noopener" :title="breadcrumb_two" to="" v-if="breadcrumb_two"> > <span>{{ breadcrumb_two }}</span></nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'Breadcrumb',
    props: ['breadcrumb_one', 'breadcrumb_one_slug', 'breadcrumb_two']
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/base.scss';
@import '../../assets/scss/mixins.scss';

.breadcrumb {
    margin: 5px auto;
    padding: 10px;
    padding-top: 15px;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: .5px;
    > {
        a {
            color: $grey_color;
        }

    }
}
</style>
