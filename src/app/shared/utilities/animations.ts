import { animate, state, style, transition, trigger } from "@angular/animations";

export const appearAnimation = trigger('appearAnimation', [
  state("standBy", style({
    'opacity': '0',
    'transform': 'translate({{ startX }}, {{ startY }})'
  }), {params: {startX: 0, startY: 0}}),
  state("in", style({
    'opacity': '1',
    'transform': 'translate(0, 0)'
  })),
  transition('standBy => in', animate("{{ duration }} cubic-bezier(0.5, 0, 0, 1)"), {params: { duration: '1s'}})
]);




