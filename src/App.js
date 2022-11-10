import "./App.css";
import Customer from "./components/Customer";

const customer = [
  {
    id: 1,
    image: "https://placeimg.com/640/480/any",
    name: "Yonghyun Kim",
    birthDate: 19960629,
    gender: "Male",
    job: "Web developer",
  },
  {
    id: 2,
    image: "https://placeimg.com/640/480/any",
    name: "Yireh Lim",
    birthDate: 19921020,
    gender: "Male",
    job: "Web Designer",
  },
  {
    id: 3,
    image: "https://placeimg.com/640/480/any",
    name: "Hyun Park",
    birthDate: 19850321,
    gender: "Male",
    job: "Front-end developer",
  },
];

function App() {
  return customer.map((item) => {
    return (
      <Customer
        key={item.id}
        id={item.id}
        image={item.image}
        name={item.name}
        birthDate={item.birthDate}
        gender={item.gender}
        job={item.job}
      />
    );
  });
}

export default App;
