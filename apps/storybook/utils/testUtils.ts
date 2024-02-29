/**
 * Returns soft comparator options with increased pixel difference threshold when running locally
 * to avoid flaky test screenshot results e.g. on Mac m1 architecture
 */
export const getSoftComparatorOptions = (options?: Partial<Options>): Options => {
  if (process.env.CI) {
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
   * An acceptable ratio of pixels that are different to the total amount of pixels, between '0' and '1'.
   */
  maxDiffPixelRatio: number;
  /**
   * An acceptable amount of pixels that could be different.
   */
  maxDiffPixels: number;
}
