import * as request from '@/utils/httpRequest';

export const suggestedApi = async (page = 1, per_page = 5) => {
  try {
    const res = await request.get('users/suggested', {
      params: {
        page,
        per_page,
      },
    });
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
