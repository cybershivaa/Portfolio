declare module "gsap-trial/SplitText" {
  export interface SplitTextVars {
    type?: string;
    linesClass?: string;
    wordsClass?: string;
    charsClass?: string;
  }

  export type SplitTextTarget =
    | string
    | Element
    | Array<string | Element>
    | ArrayLike<string | Element>;

  export class SplitText {
    constructor(target: SplitTextTarget, vars?: SplitTextVars);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }

  export default SplitText;
}
