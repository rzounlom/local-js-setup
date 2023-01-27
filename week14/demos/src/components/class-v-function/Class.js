const ClassComponent = (props) => {
  console.log(props);
  let { name } = props;
  return <div>Class Component {name}</div>;
};

export default ClassComponent;
