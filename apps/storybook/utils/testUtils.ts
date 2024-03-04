/**
 * Returns soft comparator options with increased pixel difference threshold when running on arm architecture
 */
export const getSoftComparatorOptionsOnArmArchitecture = (options?: Partial<Options>): Options => {
  if (!process.arch.includes("arm")) {
    return {
      maxDiffPixelRatio: 0,
      maxDiffPixels: 0,
    };
  }

  return {
    maxDiffPixelRatio: 0.01,
    maxDiffPixels: 2000,
    ...options,
  };
};

interface Options {
  /**
   * An acceptable ratio of pixels that are different to the total amount of pixels, between '0' and '1'
   */
  maxDiffPixelRatio: number;
  /**
   * An acceptable amount of pixels that could be different
   */
  maxDiffPixels: number;
}
