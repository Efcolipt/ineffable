<template>
  <header
    class="absolute w-full inset-0 h-40 z-50 pt-7 bg-gradient-to-b from-dark to-dark-0"
  >
    <div class="container">
      <div class="flex justify-between items-center">
        <div class="header__brand">
          <NuxtLink to="/">
            <UILogo />
          </NuxtLink>
        </div>
        <nav class="header__menu">
          <ul class="flex items-center gap-11">
            <li class="header__item">
              <NuxtLink to="/" class="base-text"> Лента </NuxtLink>
            </li>
            <li class="header__item">
              <NuxtLink to="/" class="base-text"> Фильмы </NuxtLink>
            </li>
            <li class="header__item">
              <NuxtLink to="/" class="base-text"> Сериалы </NuxtLink>
            </li>
            <li class="header__item">
              <NuxtLink to="/" class="base-text"> Мультфильмы </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="flex items-center gap-10">
          <div>
            <UIIcon name="search" />
          </div>
          <div>
            <UIButton theme="secondary" size="sm">
              <UIIcon name="account-circle" />
              <span class="text-sm base-text"> Вход / Регистрация </span>
            </UIButton>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  &__item {
    a {
      @apply hover:text-primary transition-colors duration-300;
    }
  }
}
</style>
