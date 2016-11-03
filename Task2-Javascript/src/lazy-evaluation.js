function lazyEvaluation (func) {
  return func.bind.apply(func, arguments);
}