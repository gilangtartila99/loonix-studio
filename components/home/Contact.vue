<template>
    <section id="contact" class="contact">
        <div class="contact_container container">
            <div class="section_title">We are here to help you</div>
            <div class="title">If you have any questions please do let me us</div>
            <div class="desc">We are one stop Marketing support services. The company start up as a Marketing Support that serve all of our client marketing needs then leverage our expertise to a Business Development & Support.</div>
            <div class="block_contact">
                <div class="number">Call: +6221 29675959</div>
                <span>or</span>
                <a class="message button-default" href="mailto:support@ioonixstudio.com?Subject=Contact%20Ioonix Studio%20from%20Website" target="_top">Message Us</a>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Contact'
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/base.scss';
@import '../../assets/scss/mixins.scss';

.contact {
    width: 100%;
    overflow: hidden;
    color: $white_color;
    @include background-color($base_color);
    > .contact_container {
        padding: 50px 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        > {
            .section_title {
                position: relative;
                font-size: 20px;
                font-weight: 600;
                letter-spacing: .5px;
                color: $white_color;
                padding-bottom: 10px;
                &:after {
                    position: absolute;
                    content: " ";
                    width: 60px;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    @include border-bottom(2px solid $base_color_orange);
                }
            }
            .title {
                font-family: $font_arial;
                padding: 10px 0;
                font-size: 22px;
            }
            .desc {
                font-size: 14px;
                padding: 10px 0;
                line-height: 15px;
                color: $dark_grey_color;
                text-align: center;
            }
            .block_contact {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 10px 0;
                > {
                    .number {
                        font-size: 14px;
                        font-weight: 600;
                    }
                    span {
                        font-size: 12px;
                        padding: 0 10px;
                    }
                    .message {
                        padding: 5px 20px;
                        @include background-color($light_grey_color);
                    }
                }
            }
        }
    }
}

@media (max-width: 1024px) {
    .contact > .contact_container {
        padding: 50px 150px;
    }
}

@media (max-width: 500px) {
    .contact > .contact_container {
        padding: 50px 10px;
    }
}
</style>
