import type { Dispatch, SetStateAction } from 'react';

/**
 * Return type of {@link useBoolean} hook.
 */
export interface BooleanReturn {
  /**
   * The current boolean value.
   */
  value: boolean;

  /**
   * Directly sets the boolean state.
   */
  setValue: Dispatch<SetStateAction<boolean>>;

  /**
   * Toggles the current value between `true` and `false`.
   */
  toggle: () => void;

  /**
   * Sets the value to `true`.
   */
  setTrue: () => void;

  /**
   * Sets the value to `false`.
   */
  setFalse: () => void;

  /**
   * Resets the value back to the initial `defaultValue`.
   */
  reset: () => void;
}
