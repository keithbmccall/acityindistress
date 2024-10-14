import { fetchQuery } from '../../fetch';
import { AllType, PagesQuery, PostsQuery } from '../../index';

type GetAllQueryData = AllType;
export const queryAll = async (): Promise<GetAllQueryData> => {
  const query = `
    query {
        ${PostsQuery}
        ${PagesQuery}
    }`;

  const res = await fetchQuery(query);

  return res.data;
};
