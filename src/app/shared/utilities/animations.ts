import { animate, state, style, transition, trigger } from "@angular/animations";

export const appear = trigger('appear', [
  state("standBy", style({
    'opacity': '0',
  })),
  state("in", style({
    'opacity': '1',
  })),
  transition('standBy => In', animate("1500ms 0ms cubic-bezier(0.5, 0, 0, 1)"))
]);

export const dynamicAppear = trigger('dynamicAppear', [
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

export const appearFromRight = trigger('appearFromRight', [
  state("standBy", style({
    'opacity': '0',
    'transform': 'translateX(5%)'
  })),
  state("in", style({
    'opacity': '1',
    'transform': 'translateX(0)'
  })),
  transition('standBy => in', animate("1500ms 0ms cubic-bezier(0.5, 0, 0, 1)"))
]);

export const appearFromLeft = trigger('appearFromLeft', [
  state("standBy", style({
    'opacity': '0',
    'transform': 'translateX(-5%)'
  })),
  state("in", style({
    'opacity': '1',
    'transform': 'translateX(0)'
  })),
  transition('standBy => in', animate("{{ duration }} cubic-bezier(0.5, 0, 0, 1)")),

]);

export const appearFromBottom = trigger('appearFromBottom', [
  state("standBy", style({
    'opacity': '0',
    'transform': 'translateY(15%)'
  })),
  state("in", style({
    'opacity': '1',
    'transform': 'translateX(0)'
  })),
  transition('standBy => in', animate("1500ms cubic-bezier(0.5, 0, 0, 1)"))
]);

export const appearIn = trigger('slideInAnimation', [
  state("standByRight", style({
    'opacity': '0',
    'transform': 'translateX(5%)'
  })),
  state("inFromRight", style({
    'opacity': '1',
    'transform': 'translateX(0)'
  })),

  state("standByLeft", style({
    'opacity': '0',
    'transform': 'translateX(-5%)'
  })),
  state("inFromLeft", style({
    'opacity': '1',
    'transform': 'translateX(0)'
  })),

  state("standByBottom", style({
    'opacity': '0',
    'transform': 'translateY(15%)'
  })),
  state("inFromBottom", style({
    'opacity': '1',
    'transform': 'translateX(0)'
  })),
  transition('standByRight => inFromRight', animate("1s cubic-bezier(0.5, 0, 0, 1)")),
  transition('standByBottom => inFromBottom', animate("1s cubic-bezier(0.5, 0, 0, 1)")),
  transition('standByLeft => inFromLeft', animate("1s cubic-bezier(0.5, 0, 0, 1)"))
]);

