import { SECTIONS } from './sections.js'

export const NAV_ITEMS = SECTIONS.map(({ key, label }) => ({
  key,
  label,
}))
