import { useState } from "react";

const UseStateObject = () => {
  //   const [name, setName] = useState("Ahmet Can")
  //   const [age, setAge] = useState(30)
  //   const [salary, setSalary] = useState(50000)

  // {
  //   /* 3 ayrı state yerine obje olarak kullanmak */
  // }
  const [kisi, setKisi] = useState({
    name: "Fulya",
    age: 30,
    salary: 90000,
  });

  //! Toggle butonuna her basildiginda true-false degisen bir state tanimladik
  const [toggle, setToggle] = useState(true);
  //   let toggle = false

  const handleToggle = () => {
    // toggle = !toggle
    //! toggle butonuna basildiginda toggle state'nin degilini al
    setToggle(!toggle);

    //? toggle == true ise
    if (toggle) {
      setKisi({
        name: "Canan cann",
        age: 40,
        salary: 60000,
      });
    } else {
      //? toggle == false ise
      setKisi({
        name: "Fulya",
        age: 30,
        salary: 90000,
      });
    }
  };
  console.log(toggle);
  return (
    <div>
      <h1>USE STATE OBJECT</h1>
      <h2>NAME:{kisi.name}</h2>
      <h2>AGE:{kisi.age}</h2>
      <h2>Salary:{kisi.salary}</h2>

      <button onClick={() => setKisi({ ...kisi, name: "Mehmet Kan" })}>
        Change Name
      </button>

      <button onClick={() => setKisi({ ...kisi, age: kisi.age + 1 })}>
        inc age
      </button>
      <button onClick={() => setKisi({ ...kisi, salary: kisi.salary + 10000 })}>
        inc salary
      </button>

      <button
        onClick={() =>
          setKisi({
            name: "Canan cann",
            age: 40,
            salary: 60000,
          })
        }
      >
        Full Change
      </button>

      <button onClick={handleToggle}>Toggle</button>

      {/* 3 ayrı state olarak kullanmak */}
      {/* 
      <h1>USE STATE OBJECT</h1>
      <h2>NAME:{name}</h2>
      <h2>AGE:{age}</h2>
      <h2>Salary:{salary}</h2> */}

      {/* <button onClick={() => setName("Mehmet Kan")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>inc age</button>
      <button onClick={() => setSalary(salary + 10000)}>inc salary</button> */}
    </div>
  );
};

export default UseStateObject;
