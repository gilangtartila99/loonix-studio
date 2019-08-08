<template>
    <section id="team" class="container">
        <div class="team">
            <div class="section_title">Meet our Heroes</div>
            <div class="title">Mee the Team</div>
            <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                    <div class="swiper-slide item">
                        <img class="image" src="/img/photo/1.png" alt="Fera">
                        <div class="division">Consultancy Manager</div>
                        <div class="name">Fera</div>
                    </div>
                    <div class="swiper-slide item">
                        <img class="image" src="/img/photo/2.png" alt="Verina">
                        <div class="division">Senior Marketing</div>
                        <div class="name">Verina</div>
                    </div>
                    <div class="swiper-slide item">
                        <img class="image" src="/img/photo/3.png" alt="Eko">
                        <div class="division">Lead Video</div>
                        <div class="name">Eko</div>
                    </div>
                    <div class="swiper-slide item">
                        <img class="image" src="/img/photo/4.png" alt="Gilang">
                        <div class="division">Lead Website</div>
                        <div class="name">Gilang</div>
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
  name: 'Team',
  data() {
      return {
        swiperOption: {
            slidesPerView: 4,
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

.team {
    width: 100%;
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

.swiper-container {
    padding: 40px 0;
}

.item {
    padding: 0 10px;
    text-align: center;
    > {
        .image {
            width: 100%;
        }
        .division {
            font-size: 10px;
            color: $base_color;
            padding: 10px 0 0;
            letter-spacing: .5px;
        }
        .name {
            position: relative;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: .5px;
            color: $black_color;
            padding: 10px 0;
            &:after {
                position: absolute;
                content: " ";
                width: 30px;
                bottom: 0;
                left: 0;
                right: 0;
                margin: 0 auto;
                @include border-bottom(2px solid $base_color_orange);
            }
        }
    }
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
    .team {
        display: block;
        text-align: center;
        justify-content: unset;
        align-items: unset;
        flex-direction: unset;
    }
    .item {
        padding: 0 20px;
        > {
            .division {
                font-size: 12px;
            }
            .name {
                font-size: 16px;
            }
        }
    }
    .swiper-container {
        padding: 40px 0 20px;
    }
    .swiper-button-prev, .swiper-button-next {
        display: block;
    }
}
</style>
