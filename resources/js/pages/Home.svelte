<script>
  const { state } = $props()

  import { onMount } from 'svelte'

  import List from '@/components/core/List.svelte'
  import ProfileItem from '@/components/app/lists/ProfileItem.svelte'
  import ProfileForm from '@/components/app/forms/ProfileForm.svelte'

  function update() {
    state.profiles.update()
  }

  function createProfile() {
    // state.profiles.edited = null
    // state.page.name = 'profile'
  }

  onMount(update)
</script>

<div class="profiles">
  <h2>Профили</h2>

  <div class="actions">
    <button onclick={update}>Обновить</button>
    <button onclick={createProfile}>Создать</button>
  </div>

  <ul>
    {#if !state.profiles.is_loading}
      <List
        data={state.profiles.list}
        item={ProfileItem}
        class="flex flex-col gap-2"
      />
    {:else}
      Загрузка...
    {/if}
  </ul>
</div>

<ProfileForm />

<style>
  .profiles {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .actions {
    display: flex;
    gap: 0.25rem;
  }

  button {
    width: fit-content;
    padding: 0.1rem 0.25rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0;
  }
</style>
