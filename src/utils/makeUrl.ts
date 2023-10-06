import { isUndefined, omitBy } from "lodash";

export const makeUrl = (
  path: string,
  baseUrl: string,
  queryParams?: any
): URL => {
  const url = new URL(path, baseUrl);
  if (queryParams) {
    url.search = new URLSearchParams(
      omitBy(queryParams, isUndefined)
    ).toString();
  }
  return url;
};
