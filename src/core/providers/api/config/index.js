const getConfig = () => {
  const config = {
    baseUrl: 'https://randomuser.me/api/'
  };

  return {
    baseURL: config.baseUrl,
    headers: {}
  };
};

export default getConfig;
