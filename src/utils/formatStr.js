export const formatStrForPath = str =>
  str
    .toLowerCase()
    .split(" ")
    .join("-")
