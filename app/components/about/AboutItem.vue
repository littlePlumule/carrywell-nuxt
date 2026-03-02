<template>
  <div class="about__wrap">
    <div class="about__picture">
      <img :src="image" alt="about us" />
    </div>
    <div class="about__description">
      <h3 class="about__title hl3">{{ title }}</h3>
      <div class="about__content hl7">
        <p
          v-for="(text, index) in content"
          :key="index"
          class="about__content-text"
        >
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
  alt: string
  title: string
  content: string[]
}>()
</script>

<style lang="scss" scoped>
.about {
  &__wrap {
    display: flex;
    align-items: center;
    margin: 40px 0;
    background-image: linear-gradient(
      to right,
      var(--black) 65%,
      var(--regal-blue)
    );
    overflow: hidden;

    &:nth-child(even) {
      flex-direction: row-reverse;
      background-image: linear-gradient(
        to left,
        var(--black) 65%,
        var(--regal-blue)
      );
    }
  }

  &__picture {
    aspect-ratio: 275 / 183;
    width: 50%;
    object-fit: cover;
    object-position: center;
    position: relative;
    box-shadow: 0 0 5px var(--black);

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: linear-gradient(
        to right,
        transparent 85%,
        var(--black)
      );
    }
  }

  &__wrap:nth-child(even) &__picture::after {
    background-image: linear-gradient(to left, transparent 85%, var(--black));
  }

  &__description {
    width: 50%;
    color: var(--white);
    padding: 1em 20px;
  }

  &__title {
    text-align: center;
    margin-inline: 20px;
    margin-bottom: 1em;
    font-weight: var(--bold);
  }

  &__content {
    font-weight: var(--semi-bold);
    letter-spacing: 2px;

    &-text + &-text {
      margin-top: 1.5em;
    }
  }
}

@media screen and (max-width: 768px) {
  .about {
    &__wrap {
      display: block;
      position: relative;
    }

    &__picture {
      width: 100%;
      position: absolute;
      aspect-ratio: unset;
      inset: 0;
      box-shadow: none;

      img {
        background-attachment: fixed;
        margin: auto;
        position: absolute;
        inset: 0;
      }

      &::after {
        background-image: linear-gradient(to right, #00000099);
      }
    }

    &__description {
      width: 100%;
      position: relative;
    }
  }
}
</style>
