export interface PositionEvent extends MouseEvent, TouchEvent {}

export const handlePosition = (event: PositionEvent) => {
  const {
    touches,
    x = 0,
    y = 0,
  } = event
  const { clientX = 0, clientY = 0 } = touches?.[0] || {}

  return {
    posX: touches ? clientX : x,
    posY: touches ? clientY : y,
  }
}

export const pushWithDelay = (list: any[], toAdd: any[] = [], delay = 0) => new Promise((resolve, reject) => {
  if(!list || !toAdd?.length) reject()
  toAdd.forEach((element, id) => {
    setTimeout(() => {
      list.push(element)
    }, id * delay)
  })
  setTimeout(resolve, (toAdd.length - 1) * delay)
})

export const formatProperName = (name: string) => name
  .split(' ')
  .map(([first, ...rest]) => [first.toUpperCase(), ...rest].join(''))
  .join(' ')

export const formatIndexNumber = (id: number ) => `N°${id.toString().padStart(4, '0')}`
