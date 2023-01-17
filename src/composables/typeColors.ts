import mainColors from '@/assets/colors.json'

export function typeColors() {
  const colors = $ref(mainColors)

  const getListByAttribute = (attribute: string) => 
    computed(() => Object
      .fromEntries(Object
        .entries(colors)
        .map(([key, value] : [string, any]) => [key, value[attribute]])))

  return {
    badgeColors: getListByAttribute('badge'),
    backgroundColors: getListByAttribute('background'),
  }
} 