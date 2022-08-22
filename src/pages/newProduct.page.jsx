import axios from "axios";
import { useState } from "react";

const NewProductPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState(null);

  const handleNameChange = (ev) => {
    setName(ev.target.value);
  };
  const handlePriceChange = (ev) => {
    setPrice(ev.target.value);
  };
  const handleDescriptionChange = (ev) => {
    setDescription(ev.target.value);
  };
  const handleImgChange = (ev) => {
    setImg(ev.target.files[0]);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const formData = new FormData();
    formData.append("productImage", img);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    axios
      .post("/products", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      method="post"
      action="http://localhost:3001/api/products"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          id="price"
          value={price}
          onChange={handlePriceChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="productImage">Img:</label>
        <input
          type="file"
          name="productImage"
          id="productImage"
          onChange={handleImgChange}
        />
      </div>
      <div>
        <button>Create</button>
      </div>
    </form>
  );
};

export default NewProductPage;
