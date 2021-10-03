import { animate, state, style, transition, trigger } from "@angular/animations";

export const appear = trigger('appear', [
  state("standBy", style({
    'opacity': '0',
  })),
  state("In", style({
    'opacity': '1',
  })),
  transition('standBy => In', animate("1500ms 0ms cubic-bezier(0.5, 0, 0, 1)"))
]);

export const slideIn = trigger('slideInAnimation', [
  state("standByRight", style({
    'opacity': '0',
    'transform': 'translateX(-5%)'
  })),
  state("standByBottom", style({
    'opacity': '0',
    'transform': 'translateY(15%)'
  })),
  state("inFromRight", style({
    'opacity': '1',
    'transform': 'translateX(0)'
  })),
  state("inFromBottom", style({
    'opacity': '1',
    'transform': 'translateX(0)'
  })),
  transition('standByRight => inFromRight', animate("900ms 0ms cubic-bezier(0.5, 0, 0, 1)")),
  transition('standByBottom => inFromBottom', animate("900ms 0ms cubic-bezier(0.5, 0, 0, 1)"))
]);

