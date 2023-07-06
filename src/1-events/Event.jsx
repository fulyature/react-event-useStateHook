const Event = () => {
  const handleClick = (e) => {
    alert("Hi");
    console.log(e);
    console.log(e.target);
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Event;
