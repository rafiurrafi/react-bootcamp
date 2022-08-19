const loggerMiddleware = () => (next) => (action) => {
  console.log("Before Loggin");
  next(action);
  console.log("After logging");
};
export default loggerMiddleware;
