const Error = ({ message }: { message: string }) => {
  return <div className="alert text-light bg-danger mt-3 mb-2">{message}</div>;
};

export default Error;
