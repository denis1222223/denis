function lazyMemoEvaluation(func) {
  var result;
  var lazyEvaluation = func.bind.apply(func, arguments);
  return function() {
    if (result) {
      return result;
    }
    return lazyEvaluation();
  }
}