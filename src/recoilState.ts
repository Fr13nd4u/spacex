import { atom } from 'recoil'
import { type IRocket } from './queries/rockets'

export const rocketState = atom<IRocket[]>({
  key: 'rocketState',
  default: []
})

export const favouriteRocketState = atom<IRocket[]>({
  key: 'favouriteRocketState',
  default: []
})
