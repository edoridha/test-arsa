import { use, useEffect, useState } from "react";

function Soal4() {
  const [search, setSearch] = useState("");
  const [image, setImage] = useState(false);
  const [fail, setFail] = useState(false);
  const [joke, setJoke] = useState({
    setup: "",
    punchline: "",
  });

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

      <button className="btn btn-primary" >Soal 5</button>
    </>
  );
}

export default Soal4;
