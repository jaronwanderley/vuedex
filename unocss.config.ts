import {
  defineConfig,
  presetAttributify,
  // presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  rules: [
    [/^perspective-(\d+)$/, ([, d]: string[]) => ({ perspective: `${+d}px` })],
    ['preserve-3d', {'transform-style': 'preserve-3d'}],
    [/^bg--([\w-]+)$/, ([, w]: any) => ({ background: `hsl(var(--${w},0,0%,0%))` })],
    [/^bg--([\w-]+)\/(\d+)$/, ([, w, d]: any) => ({ background: `hsla(var(--${w},0,0%,0%),${+d / 100})` })],
    [/^text--([\w-]+)$/, ([, w]: any) => ({ color: `hsl(var(--${w},0,0%,0%))` })],
    [/^color--([\w-]+)$/, ([, w]: any) => ({ color: `hsl(var(--${w},0,0%,0%))` })],
    [/^fill--([\w-]+)$/, ([, w]: any) => ({ fill: `hsl(var(--${w},0,0%,0%))` })],
    [/^stroke--([\w-]+)$/, ([, w]: any) => ({ stroke: `hsl(var(--${w},0,0%,0%))` })],
    [/^border--([\w-]+)$/, ([, w]: any) => ({ 'border-color': `hsl(var(--${w},0,0%,0%))` })],
    [/^border--([\w-]+)\/(\d+)$/, ([, w, d]: any) => ({ 'border-color': `hsla(var(--${w},0,0%,0%),${+d / 100})` })],
    ['max-w-fill', { 'max-width': '-webkit-fill-available' }],
    [/^ring--(\w+)$/, ([, w]: any) => ({ '--un-ring-color': `hsl(var(--${w},0,0%,0%))` })],
    [/^ring--([\w-]+)\/(\d+)$/, ([, w, d]: any) => ({ '--un-ring-color': `hsla(var(--${w},0,0%,0%),${+d / 100})` })],
    ['ring-inner', { 'box-shadow': 'inset var(--un-ring-offset-shadow),inset var(--un-ring-shadow), var(--un-shadow) !important' }],
    ['text-vertical', { 'writing-mode': 'vertical-lr' }],
  ],
  shortcuts: [
    ['btn', 'bg--bs py-[0.6] px-[1.2] rounded-full text-[1em] font-[500] cursor-pointer flex justify-center sm:justify-start gap-2 items-center '],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
