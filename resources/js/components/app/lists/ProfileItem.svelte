<script module>
  function createProfile() {
    // state.profiles.edited = null
    // state.page.name = 'profile'
  }
</script>

<script>
  const { class: className = '', style: styles = '', data: profile_data, is_last } = $props()

  import state from '@/state'

  function gotoProfile(profile) {
    // state.profiles.current = profile.id
    // state.page.name = 'billings'
  }

  function changeProfile(profile) {
    // state.profiles.edited = profile
    // state.page.name = 'profile'
  }

  function removeProfile(profile) {
    if (state.profiles.remove(profile.id)) {
      state.profiles.update()
    }
  }
</script>

<li>
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="link" onclick={() => gotoProfile(profile_data)}>
    {profile_data?.name} ({profile_data?.broker.name})
  </div>
  <div class="buttons">
    <button onclick={() => changeProfile(profile_data)}>Изменить</button>
    <button onclick={() => removeProfile(profile_data)}>Удалить</button>
  </div>
</li>

<style>
  li {
    display: flex;
    justify-content: space-between;
  }
  .link {
    width: fit-content;
    list-style-type: none;
    color: blue;
    cursor: pointer;
    display: flex;
  }
  .link:hover {
    text-decoration: underline;
  }

  .buttons {
    display: flex;
    gap: 1rem;
  }
</style>
