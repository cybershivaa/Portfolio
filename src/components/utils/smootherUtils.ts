export type SmootherController = {
  paused: (state: boolean) => void;
  scrollTop: (value: number) => void;
  scrollTo: (target: string | number | Element, smooth?: boolean, position?: string) => void;
};

export let smoother: SmootherController = {
  paused: (state) => {
    document.body.style.overflowY = state ? "hidden" : "auto";
  },
  scrollTop: (value) => {
    window.scrollTo({ top: value, behavior: "auto" });
  },
  scrollTo: (target) => {
    if (typeof target === "number") {
      window.scrollTo({ top: target, behavior: "smooth" });
      return;
    }

    if (typeof target === "string") {
      const node = document.querySelector(target);
      node?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  },
};
