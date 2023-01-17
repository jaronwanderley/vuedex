interface DirectiveOptions {
  el: any
  options: Function
  config?: any
}

const setRipple = ({ el, options, config }: DirectiveOptions) => {
  const position = getComputedStyle(el).getPropertyValue('position')
  const acceptedPositions = ['relative', 'absolute']
  setStyle(el, {
    position: acceptedPositions.includes(position) ? position : 'relative',
    overflow: 'hidden',
  })

  if (el._RD)
    el.removeEventListener('click', el._RD)

  el._RD = (event: MouseEvent) => {
    // get options
    const typeOptions = typeOf(options())
    if (options() && typeOptions !== 'Object') {
      console.error(`The options of Ripple must be a Object! Got ${typeOptions}. Error on Element:\n${getSelector(el)}`)
      return
    }
    const { set: configSet = 'ripple', start: configStart = 'ripple-before', end: configEnd = 'ripple-play' } = config || {}
    const { set = configSet, start = configStart, end = configEnd } = options() || {}

    // setup
    const { pageX, pageY } = event
    const { x, y, width, height } = el.getBoundingClientRect()
    const { pageXOffset, pageYOffset } = window
    
    const buttonSize = width > height ? width : height
    const buttonSizeString = `${buttonSize}px`
    // remove any previous ripples
    const ripples = [...el.querySelectorAll('[ripple]')]
    ripples.forEach(ripple => el.removeChild(ripple))
    // create a new ripple
    const ripple = createEl('span')
    ripple.setAttribute('ripple', 'true')
    setClass(ripple, set)
    if (start)
      setClass(ripple, start)
    el.appendChild(ripple)
    // set the ripple to the click position and start animation
    setStyle(ripple, {
      width: buttonSizeString,
      height: buttonSizeString,
      top: `${pageY - y - pageYOffset - buttonSize / 2}px`,
      left: `${pageX - x - pageXOffset - buttonSize / 2}px`,
      pointerEvents: 'none',
    })
    setTimeout(() => {
      if (start)
        removeClass(ripple, start)
      setClass(ripple, end)
    }, 5)
  }

  el.addEventListener('click', el._RD, false)
}

export default (config: any) => {
  return {
    mounted(el: any, binding: any) {
      const options = () => binding.value
      setRipple({ el, options, config })
    },
  }
}
