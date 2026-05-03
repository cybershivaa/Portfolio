type SplitTextTarget =
  | string
  | Element
  | Array<string | Element>
  | ArrayLike<string | Element>;

interface SplitTextVars {
  type?: string;
  linesClass?: string;
  wordsClass?: string;
  charsClass?: string;
}

export class SplitText {
  public chars: Element[] = [];
  public words: Element[] = [];
  public lines: Element[] = [];

  private originals: Array<{ element: Element; html: string }> = [];

  constructor(target: SplitTextTarget, vars?: SplitTextVars) {
    const options = vars ?? {};
    const types = (options.type ?? "").split(",").map((item) => item.trim());
    const useChars = types.includes("chars");
    const useWords = types.includes("words");
    const useLines = types.includes("lines");

    this.resolveTargets(target).forEach((element) => {
      this.originals.push({ element, html: element.innerHTML });
      this.splitElement(element, {
        useChars,
        useWords,
        useLines,
        linesClass: options.linesClass,
        wordsClass: options.wordsClass,
        charsClass: options.charsClass,
      });
    });
  }

  public revert(): void {
    this.originals.forEach(({ element, html }) => {
      element.innerHTML = html;
    });
    this.chars = [];
    this.words = [];
    this.lines = [];
  }

  private resolveTargets(target: SplitTextTarget): Element[] {
    if (typeof target === "string") {
      return Array.from(document.querySelectorAll(target));
    }

    if (target instanceof Element) {
      return [target];
    }

    return Array.from(target)
      .map((item) => (typeof item === "string" ? document.querySelector(item) : item))
      .filter((item): item is Element => item instanceof Element);
  }

  private splitElement(
    element: Element,
    {
      useChars,
      useWords,
      useLines,
      linesClass,
      wordsClass,
      charsClass,
    }: {
      useChars: boolean;
      useWords: boolean;
      useLines: boolean;
      linesClass?: string;
      wordsClass?: string;
      charsClass?: string;
    }
  ): void {
    const text = element.textContent ?? "";
    element.innerHTML = "";

    const container = useLines ? document.createElement("span") : element;
    if (useLines) {
      if (linesClass) {
        container.className = linesClass;
      }
      element.appendChild(container);
      this.lines.push(container);
    }

    if (useChars) {
      Array.from(text).forEach((char) => {
        if (/\s/.test(char)) {
          container.appendChild(document.createTextNode(char));
          return;
        }
        const charNode = document.createElement("span");
        if (charsClass) {
          charNode.className = charsClass;
        }
        charNode.textContent = char;
        container.appendChild(charNode);
        this.chars.push(charNode);
      });
      return;
    }

    if (useWords) {
      text.split(/(\s+)/).forEach((part) => {
        if (!part) {
          return;
        }
        if (/^\s+$/.test(part)) {
          container.appendChild(document.createTextNode(part));
          return;
        }
        const wordNode = document.createElement("span");
        if (wordsClass) {
          wordNode.className = wordsClass;
        }
        wordNode.textContent = part;
        container.appendChild(wordNode);
        this.words.push(wordNode);
      });
      return;
    }

    container.textContent = text;
  }
}

export default SplitText;