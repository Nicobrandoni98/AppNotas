const Content = ({ parts }) => {
  console.log(parts);

  return (
    <>
      {parts.map((e) => (
        <p key={e.name}>{e.name} {e.exercises}</p>
      ))}
    </>
  );
};
export default Content;
