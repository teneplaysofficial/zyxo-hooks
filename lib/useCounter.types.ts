import type { Dispatch, SetStateAction } from 'react';

/**
 * Options for configuring the {@link useCounter} hook
 */
export interface CounterOptions {
  /**
   * Initial value of the counter
   *
   * @default 0
   */
  initialValue?: number;

  /**
   * Minimum value the counter can reach
   */
  min?: number;

  /**
   * Maximum value the counter can reach
   */
  max?: number;

  /**
   * Step size for increment and decrement
   *
   * @default 1
   */
  step?: number;

  /**
   * Callback function that is called whenever the counter value changes
   */
  onChange?: (
    /**
     * The new counter value
     */
    value: number,
  ) => void;
}

/**
 * Return type of {@link useCounter} hook
 */
export interface CounterReturn {
  /**
   * Current counter value
   */
  count: number;

  /**
   * Set counter value directly (does NOT respect `min` and `max`)
   */
  setCount: Dispatch<SetStateAction<number>>;

  /**
   * Increment the counter by `step`, respecting `max`
   */
  increment: () => void;

  /**
   * Decrement the counter by `step`, respecting `min`
   */
  decrement: () => void;

  /**
   * Reset counter to the initial value, respecting `min`/`max`
   */
  reset: () => void;

  /**
   * Reset counter to a specific value, respecting `min`/`max`
   */
  resetTo: (
    /**
     * The value to reset the counter
     */
    value: number,
  ) => void;

  /**
   *  Boolean indicating if the counter is at its minimum value
   */
  isMin: boolean;

  /**
   * Boolean indicating if the counter is at its maximum value
   */
  isMax: boolean;

  /**
   * Sets the counter value directly while enforcing `min` and `max` boundaries
   *
   * @description
   * Accepts either a number or an updater function `(prev) => next`
   */
  setCountBounded: Dispatch<SetStateAction<number>>;
}
