export default {
  post: (arg: any) =>
    Promise.resolve({
      data: {
        message: 'Successfully subscribed to newsletter!',
      },
    }),
};
