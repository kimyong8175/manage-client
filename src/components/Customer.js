function Customer(props) {
  return (
    <div>
      <CustomerProfile image={props.image} name={props.name} id={props.id} />
      <CustomerInfo
        birthDate={props.birthDate}
        gender={props.gender}
        job={props.job}
      />
    </div>
  );
}

function CustomerProfile(props) {
  return (
    <div>
      <img src={props.image} alt="profile" />
      <h2>
        Name: {props.name} ({props.id})
      </h2>
    </div>
  );
}

function CustomerInfo(props) {
  return (
    <div>
      <p>Birth: {props.birthDate}</p>
      <p>Gender: {props.gender}</p>
      <p>Job: {props.job}</p>
    </div>
  );
}

export default Customer;
