<template>
  <section class="header">
    <div class="header_container">
      <div class="header_brand">
        <a rel="noopener" title="Ioonix Studio" href="/">
          <img src="/img/loonix-logo-white.png" alt="Logo Ioonix Studio">
        </a>
      </div>
      <div class="header_right">
        <Menu :type="1" />
      </div>
      <div class="header_toggle">
        <button title="Ioonix Studio Hamburger Button" aria-label="Ioonix Studio Hamburger Button" :class="toggle ? 'hamburger hamburger--slider is-active' : 'hamburger'" type="button" @click="openToggle()">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button> 
        <Menu :type="2" :open="toggle" />
      </div>
    </div>
  </section>
</template>

<script>
const Menu = () => import('~/components/headers/Menu.vue')

export default {
  name: 'Header',
  components: {
    Menu
  },
  data() {
    return {
      toggle: false,
    }
  },
  methods: {
    openToggle() {
      this.toggle = !this.toggle;
    },
    handleScroll() {
      this.toggle = false;
    }
  },
  created () {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  destroyed () {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/base.scss';
@import '../../assets/scss/mixins.scss';

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-width: 100%;
  z-index: 9;
  @include background-color($base_color);
  > .header_container {
    width: 980px;
    height: auto;
    padding: 20px 10px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    @include transition(all .5s ease-in-out);
    > {
      .header_brand {
        z-index: 11;
        > a > img {
          height: 45px;
          vertical-align: middle;
        }
      }
      .header_right {
        display: block;
        color: $white_color;
      }
      .header_toggle {
        color: $white_color;
        display: none;
      }
    }
  }
}

@media (max-width: 1024px) {
  .header > .header_container {
    width: 750px;
    > {
      .header_brand > a > img {
        height: 40px;
      }
    }
  }
}

@media (max-width: 768px) {
  .header {
    width: -webkit-fit-content; 
    width: -moz-fit-content;
    width: -ms-fit-content;
    width: -o-fit-content; 
    width: fit-content;
  }
}

@media (max-width: 500px) {
  .header {
    width: 100%;
    > .header_container {
      width: 100%;
      display: block;
      justify-content: unset;
      align-items: unset;
      > {
        .header_brand {
          float: left;
        }
        .header_right {
          display: none;
        }
        .header_toggle {
          display: block;
          float: right;
          text-align: right;
        }
      }
    }
  }
}
</style>
