<script>
  export let data // Object
  export let last = false

  let className = ''
  let styles = ''
  export { className as class }
  export { styles as style }

  import * as yup from 'yup'
  import ParamsCheck from '@/core/ParamsCheck.svelte'

  export let onClick = (e, data, is_new) => {}

  const schema = yup.object({
    id: yup.number().required(),
    name: yup.string().required(),
    brokerId: yup.number(),
    brokerName: yup.string(),
  })
</script>

{#if last}
  <div class='profile-item new-item-border {className}' style={styles}
    on:click={(e) => onClick(e, {}, true)}
  >
    Добавить профиль
  </div>
{:else}
  <ParamsCheck {schema} {data}>
    <li class='profile-item border border-black bg-white {className}' style={styles}
      on:click={(e) => onClick(e, data, false)}
    >
      <div>{data.name}</div>
      <div>{data.brokerName}</div>
    </li>
  </ParamsCheck>
{/if}

<style lang='scss'>
  .profile-item {
    cursor: pointer; /* todo: not working :| */
    @apply px-4 h-14 flex items-center justify-between rounded-md;

    &.new-item-border {
      background-color: #fcfcfc;
      background-image: repeating-linear-gradient(164deg, #333333, #333333 14px, transparent 14px, transparent 28px, #333333 28px), repeating-linear-gradient(254deg, #333333, #333333 14px, transparent 14px, transparent 28px, #333333 28px), repeating-linear-gradient(-16deg, #333333, #333333 14px, transparent 14px, transparent 28px, #333333 28px), repeating-linear-gradient(74deg, #333333, #333333 14px, transparent 14px, transparent 28px, #333333 28px);
      background-size: 1px calc(100% + 29.13px), calc(100% + 29.13px) 1px, 1px calc(100% + 29.13px) , calc(100% + 29.13px) 1px;
      background-position: 0 0, 0 0, 100% 0, 0 100%;
      background-repeat: no-repeat;

      &:hover {
        animation: borderAnimation 4s infinite linear;
      }
    }
    &:hover {
      @apply bg-slate-50;
    }
  }

  @keyframes borderAnimation {
    from { background-position: 0 0, -29.13px 0, 100% -29.13px, 0 100%; }
    to { background-position: 0 -29.13px, 0 0, 100% 0, -29.13px 100%; }
  }
</style>
