<template>
    <section id="client" class="client">
        <div class="client_container container">
            <div class="section_title">Our Clients</div>
            <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                    <div class="swiper-slide item">
                        <img class="image" src="/img/flock.png" alt="Digital Marketing">
                    </div>
                    <div class="swiper-slide item">
                        <img class="image" src="/img/flock.png" alt="Digital Marketing">
                    </div>
                    <div class="swiper-slide item">
                        <img class="image" src="/img/flock.png" alt="Digital Marketing">
                    </div>
                    <div class="swiper-slide item">
                        <img class="image" src="/img/flock.png" alt="Digital Marketing">
                    </div>
                    <div class="swiper-slide item">
                        <img class="image" src="/img/flock.png" alt="Digital Marketing">
                    </div>
                </div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </div>
        </div>
    </section>
</template>

<script>
import '~/plugins/swiper.js'
import axios from 'axios'

export default {
  name: 'Client',
  data() {
      return {
        swiperOption: {
            slidesPerView: 5,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                500: {
                    slidesPerView: 1
                }
            }
        }
      }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/base.scss';
@import '../../assets/scss/mixins.scss';

.client {
    width: 100%;
    overflow: hidden;
    @include background-color($dark_black_color);
    > .client_container {
        padding: 50px 0 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        > {
            .section_title {
                position: relative;
                font-size: 14px;
                font-weight: 600;
                letter-spacing: .5px;
                color: $base_color_orange;
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
        }
    }
}

.image {
    width: 100%;
    padding: 10px 20px;
}

.swiper-container {
    padding: 40px 10px 20px;
}

.swiper-button-prev {
    left: 30px;
    &:before {
        padding: 1px 13px 4px 13px;
        @include box-shadow(0.5px 0.5px 3px 0px rgba(30, 30, 30, 0.25));
    }
}

.swiper-button-next {
    right: 40px;
    &:before {
        padding: 1px 11px 4px 15px;
        @include box-shadow(0.5px 0.5px 3px 0px rgba(30, 30, 30, 0.25));
    }
}

.swiper-button-prev, .swiper-button-next {
    display: none;
    top: 50%;
    opacity: .7;
    @include transition(all .5s ease-in-out);
    &:before {
        font-size: 30px;
        color: $white_color;
        @include border-radius(50%);
        @include background-color($black_color);
    }
    &:hover {
        color: $base_color_orange;
    }
}

@media (max-width: 500px) {
    .client > .client_container {
        display: block;
        text-align: center;
        justify-content: unset;
        align-items: unset;
        flex-direction: unset;
    }
    .image {
        width: auto;
    }
    .swiper-button-prev, .swiper-button-next {
        display: block;
    }
}
</style>
