for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    for (let k = 1; k <= 9; k++) {
      if (i ** 3 + j ** 3 + k ** 3 == i * 100 + j * 10 + k)
        console.log(i * 100 + j * 10 + k);
    }
  }
}
