<template>
    <div v-if="loading" class="preloader-container">
        <div class="spinner"></div>
        <img class="bounce" src="/img/logo/logo_ca_new.svg" alt="Logo Cari Aja">
    </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/base.scss';
@import '../../assets/scss/mixins.scss';

.preloader-container { 
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 8; 
    @include background(rgba($color: $white_color, $alpha: 0.5));
    > {
        .spinner {
            position: absolute;
            width: 130px;
            height: 130px;
            top: 350px;
            left: 0;
            right: 0;
            margin: 0 auto;
            @include border(5px solid rgba($base_color, .5));
            @include border-top(5px solid rgba($base_color, 1));
            @include border-radius(50%);
            @include animation(spin 1s linear 0s infinite);
        }
        .bounce {
            position: absolute;
            height: 45px;
            padding: 10px;
            top: 393px;
            left: 0;
            right: 0;
            margin: 0 auto;
        }
    }
}

@-webkit-keyframes spin {
  from { transform: rotate(0); } 
  to{ transform: rotate(360deg); }
}
@-moz-keyframes spin {
  from { transform: rotate(0); } 
  to{ transform: rotate(360deg); }
}
@-ms-keyframes spin {
  from { transform: rotate(0); } 
  to{ transform: rotate(360deg); }
}
@-o-keyframes spin {
  from { transform: rotate(0); } 
  to{ transform: rotate(360deg); }
}
@keyframes spin {
  from { transform: rotate(0); } 
  to{ transform: rotate(360deg); }
}
</style>
