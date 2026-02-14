export const sendResponse = ({
  res,
  statusCode = 500,
  message,
  data = null,
}) => {
  const success = statusCode >= 400 ? false : true;
  const modifiedMsg =
    statusCode >= 500 && !message ? message || "Something went wrong" : message;
  //100,200,300,400,500
  res.status(200).json({ message: modifiedMsg, success, data });
};
