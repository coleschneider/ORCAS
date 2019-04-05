export default {
  post: (arg: any) =>
    Promise.resolve({
      data: {
        message: 'test',
      },
    }),
};
