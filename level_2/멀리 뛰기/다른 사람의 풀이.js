function jumpCase(num) {
  return num == 1 ? 1 : num == 2 ? 2 : jumpCase(num - 1) + jumpCase(num - 2);
}
