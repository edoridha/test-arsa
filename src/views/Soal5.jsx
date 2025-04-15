const UserProfileForm = () => {

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
  
    return (
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
    );
  };
  
  export default UserProfileForm;
  
  