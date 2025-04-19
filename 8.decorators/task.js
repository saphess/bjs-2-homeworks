//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  return (...args) => {
    const hash = md5(args);
    const objectInCache = cache.find(item => item.hash === hash);
    if (objectInCache) {
      return "Из кеша: " + objectInCache.result;
    }

    const result = func(...args);

    if (cache.length < 5) {
      cache.push({ hash, result });
    } else {
      cache.shift();
      cache.push({ hash, result });
    }
    return "Вычисляем: " + result;
  }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let isFirstTime = true;

  function wrapper(...args) {
    wrapper.allCount += 1;

    if (isFirstTime) {
      wrapper.count += 1;
      func(...args);
      isFirstTime = false;
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        timeoutId = null;
        func(...args);
        wrapper.count += 1;
      }, delay)
    }
  }

  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
}
