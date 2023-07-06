const Event = () => {
  let message = "HELLO";
  const handleClick = (e) => {
    alert("Hi");
    console.log(e);
    console.log(e.target);
  };
  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target);
    message = "MERHABA";
  };
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => alert("hi alion")}>Hi</button>

      <button onClick={handleChange}>Change</button>
    </div>
  );
};

export default Event;
