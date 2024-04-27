export default function Profile(props) {
  // create css style variables
  // container style
  const containerStyle = {
    border: "1px solid black",
    width: "600px",
    height: "150px",
    padding: "10px",
    "border-radius": "5px",
  };

  const imageContainerStyle = {
    display: "absolute",
    float: "left",
  };

  const imageStyle = {
    width: "150px",
    "border-radius": "50%",
    background: "#ccc",
  };

  const descriptionContainerStyle = {
    float: "left",
    width: "400px",
    "font-family": "Arial, Helvetica, sans-serif",
    padding: "20px 10px",
  };

  const {
    id,
    first_name,
    last_name,
    email,
    avatar,
    phone_number,
    date_of_birth,
    employment,
  } = props;

  // extracting specific properties from an object and assigning them to variables
  const { title, key_skill } = employment;

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img style={imageStyle} src={avatar} />
      </div>
      <div style={descriptionContainerStyle}>
        <b>
          {first_name}
          {last_name}
        </b>
        <br />
        <a href={email}>{email}</a>
        <br />
        {phone_number}
        <br />
        {date_of_birth}
        <br />
        {employment.title}-{employment.key_skill}
        <br />
      </div>
    </div>
  );
}
