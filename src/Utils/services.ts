export const checkNumber = (number : number | null | undefined) : number => {
  if(number) {
    return number
  }
  return 0;
}
