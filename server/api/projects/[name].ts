export default defineEventHandler((event) => {
  const params = event.context.params;

  if (!params?.["name"]) {
    event.node.res.statusCode = 404;
    return { message: "Not found" };
  }

  return {
    message: `Project ${params["name"]}`,
  };
});
