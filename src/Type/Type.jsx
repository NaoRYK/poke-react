
const Type = (props) => {
  return (
    <>
      <p className="bg-mahogany-900/50 rounded-3xl p-4 text-xl font-bold text-mahogany-100">{props?.type?.toUpperCase()}</p>
    </>
  );
};

export default Type;
