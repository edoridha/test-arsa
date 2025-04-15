import { use, useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [image, setImage] = useState(false);
  const [fail, setFail] = useState(false);
  const [joke, setJoke] = useState({
    setup: "",
    punchline: "",
  });

  const [users, setUsers] = useState([
    {
      id: 1, 
      name: '',
      email: '',
      age: '',
      address: {
        street: '',
        city: '',
        country: '',
      },
    },
  ]);

  const handleChange = (userId, e) => {
    setUsers({
      ...users,
      [userId]: {
        ...users[userId],
        [e.target.name]: e.target.value,
      },
    })
  };


  const handleAddressChange = (userId, e) => {
      };


  const addNewUser = () => {
      };


  const removeUser = (userId) => {

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //nilai plus jika dibuat ui list namun sampai data tampil di console sudah bagus
    console.log('Submitted users:', users);
  };

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
       
          setJoke({ 
            setup: data.setup,
            punchline: data.punchline,
          });
        setFail(false);
      }
      )
      .catch((error) => {
        setFail(true);
      });
  }, []);

  const handleform = (e) => {
    setSearch(e.target.value);
  };
  const handleImage = (e) => {
    e.preventDefault(e);
    setImage(true);
    return;
  };

  return (
    <>
      <form onSubmit={handleImage} className="d-flex m-2 p-5" role="search">
        <input
          onChange={handleform}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      {image ? (
        <div className="card d-flex m-5 p-5" style={{ width: "18rem" }}>
          <img
            src={`https://robohash.org/${search}`}
            className="card-img-top"
            alt="..."
          />
        </div>
      ) : (
        <p className="d-flex m-2 p-5">Image Place</p>
      )}

      <button
        type="button"
        className="btn btn-primary m-5 p-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Soal 4
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              {fail ? (
                <p className="d-flex m-2 p-5">Please wait around 15 minutes</p>
              ) : (
                <div>
                  <h5 className="modal-title" id="exampleModalLabel">
                    {joke.setup}
                  </h5>
                  <p className="d-flex m-2 p-5">{joke.punchline}</p>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="d-flex m-2 p-5">Soal 5</h1>

      <form onSubmit={handleSubmit}>
        {users.map((user) => (
          <div key={user.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <h3>User ID: {user.id}</h3>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={(e) => handleChange(user.id, e)}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={(e) => handleChange(user.id, e)}
              />
            </div>
            <div>
              <label>Age:</label>
              <input
                type="number"
                name="age"
                value={user.age}
                onChange={(e) => handleChange(user.id, e)}
              />
            </div>
  
            <h4>Address</h4>
            <div>
              <label>Street:</label>
              <input
                type="text"
                name="street"
                value={user.address.street}
                onChange={(e) => handleAddressChange(user.id, e)}
              />
            </div>
            <div>
              <label>City:</label>
              <input
                type="text"
                name="city"
                value={user.address.city}
                onChange={(e) => handleAddressChange(user.id, e)}
              />
            </div>
            <div>
              <label>Country:</label>
              <input
                type="text"
                name="country"
                value={user.address.country}
                onChange={(e) => handleAddressChange(user.id, e)}
              />
            </div>
  
            <button type="button" onClick={() => removeUser(user.id)}>
              Remove User
            </button>
          </div>
        ))}
  
        <button type="button" onClick={addNewUser}>
          Add New User
        </button>
        <button type="submit">Save All Users</button>
      </form>
    </>
  );
}

export default App;
