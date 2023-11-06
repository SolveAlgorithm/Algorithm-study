// 처음
function solution(genres, plays) {
  var answer = [];
  const playsMap = new Map();
  const setGenres = [...new Set(genres)];
  const genresMap = new Map();
  const playsPlus = [];
  for (i = 0; i < genres.length; i++) {
    playsMap.set(i, plays[i]);
  }
  setGenres.map((i) => {
    let plusItem = 0;
    const playsValue = genres.map((item, idx) => {
      if (i === item) {
        plusItem += plays[idx];
        return plays[idx];
      } else return null;
    });
    playsPlus.push(plusItem);
    genresMap.set(i, playsValue);
  });
  const genresMapArr = [...genresMap];
  playsPlus.map((num, idx) => {
    if (playsPlus[idx + 1] > num) {
      let item = genresMapArr[idx + 1];
      genresMapArr[idx + 1] = genresMapArr[idx];
      genresMapArr[idx] = item;
    }
  });
  genresMapArr.map((i) => {
    i[1].sort((a, b) => b - a);
  });
  genresMapArr.map((i) => {
    answer.push(plays.indexOf(i[1][0]));
    answer.push(plays.indexOf(i[1][1]));
  });
  return answer;
}

// 나중
function solution(genres, plays) {
  const genres_total = {};
  const genres_cnt = {};

  for (let i = 0; i < genres.length; i++) {
    if (genres_total[genres[i]]) {
      genres_total[genres[i]] += plays[i];
      genres_cnt[genres[i]].push([plays[i], i]);
    } else {
      genres_total[genres[i]] = plays[i];
      genres_cnt[genres[i]] = [[plays[i], i]];
    }
  }

  const genres_array = [];
  for (let i in genres_total) {
    genres_array.push([i, genres_total[i]]);
  }
  genres_array.sort((a, b) => b[1] - a[1]);

  for (let i in genres_cnt) {
    genres_cnt[i].sort((a, b) => {
      if (b[0] > a[0]) return 1;
      else if (b[0] < a[0]) return -1;
      else {
        if (b[1] < a[1]) return 1;
        else if (b[1] > a[1]) return -1;
      }
    });
  }
  const answer = [];
  for (let i = 0; i < genres_array.length; i++) {
    for (let j = 0; j < genres_cnt[genres_array[i][0]].length; j++) {
      if (j === 2) break;
      answer.push(genres_cnt[genres_array[i][0]][j][1]);
    }
  }
  return answer;
}
