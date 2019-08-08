<template>
    <section id="testimoni" class="testimoni_container">
        <div class="testimoni container">
            <div class="section_title">What Customers Says</div>
            <div class="title">Kind words from our Customers</div>
            <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                    <div class="swiper-slide item">
                        <div class="desc">
                            “We are excited to launch our new company and product Ooooh. After being featured in too many magazines to mention and having created an online stir, we know that Ooooh”
                        </div>
                        <div class="name">Brilliance Bloom</div>
                        <img src="/img/bb.png" alt="Brilliance Bloom">
                    </div>
                    <div class="swiper-slide item">
                        <div class="desc">
                            “We are excited to launch our new company and product Ooooh. After being featured in too many magazines to mention and having created an online stir, we know that Ooooh”
                        </div>
                        <div class="name">CariAja</div>
                        <img src="/img/cariaja.png" alt="Cari Aja">
                    </div>
                    <div class="swiper-slide item">
                        <div class="desc">
                            “We are excited to launch our new company and product Ooooh. After being featured in too many magazines to mention and having created an online stir, we know that Ooooh”
                        </div>
                        <div class="name">Fast Stream</div>
                        <img src="/img/faststream.png" alt="FastStream">
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
  name: 'Testimoni',
  data() {
      return {
        swiperOption: {
            slidesPerView: 3,
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

.testimoni_container {
    @include background-color($light_grey_color);
    > .testimoni {
        overflow: hidden;
        padding: 50px 0;
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
            .title {
                font-family: $font_arial;
                padding: 10px 0;
                font-size: 18px;
                font-weight: 600;
            }
        }
    }
}
.item {
    padding: 0 20px;
    text-align: center;
    > {
        .desc {
            font-size: 12px;
            color: $grey_color;
        }
        .name {
            position: relative;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: .5px;
            color: $black_color;
            padding: 10px 0;
            margin: 15px 0;
            &:after {
                position: absolute;
                content: " ";
                width: 40px;
                top: 0;
                left: 0;
                right: 0;
                margin: 0 auto;
                @include border-bottom(2px solid $base_color_orange);
            }
        }
        .image {
            width: 100%;
        }
    }
}

.swiper-container {
    padding: 40px 0;
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
    .testimoni_container > .testimoni {
        display: block;
        text-align: center;
        justify-content: unset;
        align-items: unset;
        flex-direction: unset;
    }
    .swiper-button-prev, .swiper-button-next {
        display: block;
    }
}
</style>
