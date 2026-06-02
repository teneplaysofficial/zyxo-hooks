/**
 * Options to configure the behavior of {@link useDocumentTitle}
 */
export interface DocumentTitleOptions {
  /**
   * Whether to restore the original document title when the component unmounts.
   *
   * If this value changes dynamically, the hook will respect the latest value on unmount.
   *
   * @default true
   */
  restoreOnUnmount?: boolean;

  /**
   * Optional template for the title, Use `%s` as a placeholder for the title.
   *
   * All occurrences of `%s` will be replaced by the provided `title`.
   *
   * @example Basic template
   * ```ts
   * template: '%s - MyApp'
   * ```
   *
   * @example Multiple placeholders
   * ```ts
   * template: '%s - %s - MyApp'
   * ```
   */
  template?: string;

  /**
   * If true, the hook will skip updating the title if the new title is identical to the current `document.title`.
   *
   * @default true
   */
  skipIfSame?: boolean;
}
