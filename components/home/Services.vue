<template>
    <section id="services" class="container services">
        <div class="services_tables_container">
            <table class="services_tables">
                <tr><th>BRANDING</th></tr>
                <tr><td>Branding Identity</td></tr>
                <tr><td>Brand Attributes</td></tr>
                <tr><td>Logo Design</td></tr>
                <tr><td>Marketing Collateral</td></tr>
            </table>
        </div>
        <div class="services_tables_container">
            <table class="services_tables">
                <tr><th>WEB DEVELOPMENT</th></tr>
                <tr><td>Website Design (UI/UX)</td></tr>
                <tr><td>Website Architecture</td></tr>
                <tr><td>Development</td></tr>
                <tr><td>Website Maintenance</td></tr>
                <tr><td>Mobile Apps</td></tr>
            </table>
        </div>
        <div class="services_tables_container">
            <table class="services_tables">
                <tr><th>PHOTOGRAPHY & VIDEOGRAPHY</th></tr>
                <tr><td>Photo Product/Place</td></tr>
                <tr><td>Video Product</td></tr>
                <tr><td>Animation/Infographic</td></tr>
                <tr><td>TVC Ads Creation</td></tr>
            </table>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Services'
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/base.scss';
@import '../../assets/scss/mixins.scss';

.services {
    padding: 50px 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    > .services_tables_container {
        width: 20%;
        float: left;
        padding: 10px;
        > .services_tables {
            width: 100%;
            text-align: center;
            border-collapse: collapse;
            @include border(1px solid $light_grey_color);
            @include transition(all .5s ease-in-out);
            > tr > {
                th {
                    padding: 8px 10px;
                    font-size: 14px;
                    letter-spacing: 1px;
                    color: $white_color;
                    @include background-color($base_color);
                    @include border(1px solid $base_color);
                }
                td {
                    padding: 8px 10px;
                    font-size: 12px;
                    @include border(1px solid $light_grey_color);
                }
            }
            &:hover {
                @include box-shadow(1px 1px 6px 0px rgba(30, 30, 30, 0.15));
            }
        }
    }
}

@media (max-width: 500px) {
    .services {
        display: unset;
        justify-content: unset;
        padding: 20px 10px;
        > .services_tables_container {
            width: 100%;
        }
    }
}
</style>
