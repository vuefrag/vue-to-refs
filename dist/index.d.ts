import { MaybeRefOrGetter, MaybeRef, ToRefs } from 'vue';

interface ToRefsOptions {
    /**
     * Replace the original ref with a copy on property update.
     *
     * @default true
     */
    replaceRef?: MaybeRefOrGetter<boolean>;
}
/**
 * Extended `toRefs` that also accepts refs of an object.
 *
 * @see https://vueuse.org/toRefs
 * @param objectRef A ref or normal object or array.
 * @param options Options
 */
declare function toRefs<T extends object>(objectRef: MaybeRef<T>, options?: ToRefsOptions): ToRefs<T>;

export { toRefs };
export type { ToRefsOptions };
