<script>
  import { inertia } from '@inertiajs/svelte'
  let userMenuOpen = false;

  function toggleUserMenu() {
    userMenuOpen = !userMenuOpen;
  }
</script>

<header class="bg-black text-white flex items-center lg:px-48 sm:px-24 px-0 gap-4 lg:h-16 h-12 lg:text-xl w-full">
  <button class="lg:w-48 w-36 text-left">Профиль</button>
  <h1 class="flex-grow lg:text-2xl sm:text-lg">Заголовок</h1>
  <div class="relative">
    <button class="lg:w-48 w-36 text-right" on:click={toggleUserMenu}>Пользователь</button>
    {#if userMenuOpen}
      <ul class="absolute w-full right-0 lg:mt-3 mt-2 bg-white text-black lg:text-lg rounded shadow-lg border">
        <li>
          <button>Профиль</button>
        </li>
        <li>
          <button use:inertia={{ href: '/logout', method: 'post' }}>Выйти</button>
        </li>
      </ul>
    {/if}
  </div>
</header>

<style lang='scss'>
  button {
    @apply px-2 py-1;
  }
  ul {
    button {
      @apply w-full text-left;
      @apply px-4 py-2;
    }
    button:hover {
      @apply bg-slate-100 w-full;
    }
  }
</style>
