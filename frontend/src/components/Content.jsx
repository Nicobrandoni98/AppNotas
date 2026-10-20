const Part = ({a,b}) => {
  return (
    <>
      <p>{a} {b}</p>
    </>
  )
}

const Content = ({ a, b, c, a2, b2, c2 }) => {
  return (
    <>
      <Part a={a} b={a2}/>
      <Part a={b} b={b2}/>
      <Part a={c} b={c2}/>
    </>
  );
};
export default Content;
