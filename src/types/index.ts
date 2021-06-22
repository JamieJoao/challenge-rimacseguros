export type availableColors = 'gray-bold' | 'gray-soft' | 'placeholder' | 'red' | 'purple'

export type availableFonts = 'Lato' | 'Roboto'

export type availableWeights = 'bold' | 'normal'

export type availableBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

/**
 * https://github.com/microsoft/TypeScript/issues/20503#issue-279811339
 */
export declare const BetterObject: {
  keys(object: {}): (keyof typeof object)[]
}