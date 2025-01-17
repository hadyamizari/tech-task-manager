import {Dimensions, PixelRatio} from 'react-native'

const {width} = Dimensions.get('window')

const baseRem = width / 375 // Assuming 375px is the base width for 1 rem

export const rem = (value: number) => {
  return PixelRatio.roundToNearestPixel(baseRem * value)
}
