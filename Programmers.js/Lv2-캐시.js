function solution(cacheSize, cities) {
  let cache = []; // 캐시
  let time = 0; // 경과 시간

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();
    const isHit = cache.includes(city);

    // cache hit
    if (isHit) {
      cache = cache.filter((c) => c != city);
      cache.push(city);
      time += 1;
    }
    // cache miss
    else {
      // 빈공간 없다면
      cache.push(city);
      if (cache.length > cacheSize) {
        cache.shift();
      }
      time += 5;
    }
  }
  return time;
}
