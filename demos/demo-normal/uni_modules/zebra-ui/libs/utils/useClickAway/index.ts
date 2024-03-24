export type UseClickAwayOptions = {
  eventName?: string
}

export function useClickAway(
  target: any,
  listener: EventListener,
  options: UseClickAwayOptions = {}
) {
  const { eventName = 'click' } = options

  const onClick = (event: Event) => {
    listener(event)
  }

  uni.$on(`page${eventName}`, (event) => {
    onClick(event)
  })
}

export function destroyClickAway(options: UseClickAwayOptions = {}) {
  const { eventName = 'click' } = options
  uni.$off(`page${eventName}`)
}
