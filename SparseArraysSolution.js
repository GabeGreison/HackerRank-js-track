function matchingStrings(strings, queries) {
  let matched = queries.map(
    (querie) => strings.filter((string) => string === querie).length
  );

  return matched;
}
