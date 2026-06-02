import { type SetStateAction, useCallback, useEffect, useState } from 'react';
import type { CounterOptions, CounterReturn } from './useCounter.types';

/**
 * A React hook to manage a numeric counter with min/max boundaries, step increments, and change callbacks
 *
 * @remarks
 * This hook uses React hooks internally:
 * - {@link https://react.dev/reference/react/useState | useState} - to manage the counter state
 * - {@link https://react.dev/reference/react/useCallback | useCallback} - to memoize increment, decrement, reset, and resetTo functions
 * - {@link https://react.dev/reference/react/useEffect | useEffect} - to call `onChange` whenever the counter changes
 *
 * @returns An object containing the counter state, controls, and helper flags
 *
 * @example
 * ```ts
 * const counter = useCounter({ initialValue: 5, min: 0, max: 10, step: 2 });
 * counter.increment(); // increases by 2
 * counter.decrement(); // decreases by 2
 * counter.reset();     // resets to 5
 * counter.resetTo(8);  // resets to 8
 * ```
 */
export function useCounter({
  initialValue = 0,
  max,
  min,
  onChange,
  step = 1,
}: CounterOptions = {}): CounterReturn {
  const clamp = useCallback(
    (value: number) => {
      let v = value;
      if (typeof max === 'number' && v > max) v = max;
      if (typeof min === 'number' && v < min) v = min;
      return v;
    },
    [max, min],
  );

  const [count, setCount] = useState(() => clamp(initialValue));

  const isMax = typeof max === 'number' && count >= max;
  const isMin = typeof min === 'number' && count <= min;

  const increment = useCallback(() => {
    setCount((prev) => clamp(prev + step));
  }, [step, clamp]);

  const decrement = useCallback(() => {
    setCount((prev) => clamp(prev - step));
  }, [step, clamp]);

  const reset = useCallback(() => {
    setCount(clamp(initialValue));
  }, [initialValue, clamp]);

  const resetTo = useCallback(
    (value: number) => {
      setCount(clamp(value));
    },
    [clamp],
  );

  const setCountBounded = useCallback(
    (value: SetStateAction<number>) => {
      setCount((prev) => {
        return clamp(typeof value === 'function' ? value(prev) : value);
      });
    },
    [clamp],
  );

  useEffect(() => {
    onChange?.(count);
  }, [count, onChange]);

  return {
    count,
    setCount,
    increment,
    decrement,
    reset,
    isMax,
    isMin,
    resetTo,
    setCountBounded,
  };
}
