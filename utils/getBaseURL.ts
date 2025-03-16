const MAP_BASE_URL = {
  test: "http://rap2api.taobao.org/app/mock/230933",
  prod: "http://rap2api-prod.taobao.org/app/mock/230933",
};

export const getBaseURL = () => {
  const env = process.env.EXPO_PUBLIC_ENV;
  if (!env) throw new Error("EXPO_PUBLIC_ENV is not defined");
  return MAP_BASE_URL[env as keyof typeof MAP_BASE_URL];
};
