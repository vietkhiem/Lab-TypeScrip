import React, { useState } from "react";
import { createBook } from "../client_api/book";
import { useNavigate } from "react-router-dom";

function BookForm() {
  const navigate = useNavigate();

  const [nameValue, setNameValue] = useState<string>("");
  const [categoryValue, setCategoryValue] = useState<string>("");
  const [priceValue, setPriceValue] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  const onValidate = (data: {
    name: string;
    price: number;
    category_id: number;
  }) => {
    const validateMessages = [];
    console.log(data, data.name, data.name.length);
    if (!data.name) {
      validateMessages.push("Tên không được để trống");
    } else if (data.name.length < 6) {
      validateMessages.push("Tên >= 6 ký tự");
    }

    if (!data.price) {
      console.log(data.price);
      validateMessages.push("Giá không được để trống hoặc < 1");
    }

    if (!data.category_id) {
      console.log(data.category_id);
      validateMessages.push("Danh mục không được để trống hoặc < 1");
    }

    return validateMessages;
  };

  const handleSubmit = async () => {
    const submitData = {
      name: nameValue,
      price: +priceValue,
      category_id: +categoryValue,
    };
    const validate = onValidate(submitData);
    if (validate.length === 0) {
      messages.length && setMessages([]);
      const response = await createBook(submitData);
      if (response.status === 201) {
        navigate("/books");
      }
    } else {
      setMessages(validate);
    }

    console.log(submitData);
  };

  return (
    <div>
      <h1>Thêm mới sản phẩm</h1>
      <div>
        <form>
          <div>
            <label htmlFor="name">Tên Sách</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setNameValue(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="price">Giá sách</label>
            <input
              type="number"
              id="price"
              onChange={(e) => setPriceValue(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="category">Danh mục</label>
            <input
              type="text"
              id="category"
              onChange={(e) => setCategoryValue(e.target.value)}
            />
          </div>
          <div>
            <button onClick={() => handleSubmit()} type="button">
              Submit
            </button>
          </div>
        </form>
      </div>
      {messages.length > 0 ? (
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default BookForm;
