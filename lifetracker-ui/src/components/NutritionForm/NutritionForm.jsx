import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./NutritionForm.css"

export default function NutritionForm({ setAppState, appState , nutrition_products,setNutrition_products }) {
    console.log(appState)
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    category: "",
    calories: "",
    image_url: ""
  });

  const handleOnInputChange = (event) => {
    if (event.target.name === "name") {
      if (form.name && form.name.length < 1) {
        setErrors((e) => ({
          ...e,
          name: "Name Field is Empty",
        }));
      } else {
        setErrors((e) => ({ ...e, name: null }));
      }
    }

    if (event.target.name === "category") {
      if (form.category && form.category.length < 1) {
        setErrors((e) => ({
          ...e,
          category: "Category Field is Empty",
        }));
      } else {
        setErrors((e) => ({ ...e, category: null }));
      }
    }

    if (event.target.name === "calories") {
      if (form.calories && form.calories.length < 1) {
        setErrors((e) => ({
          ...e,
          calories: "Calories Field is Empty",
        }));
      } else {
        setErrors((e) => ({ ...e, calories: null }));
      }
    }

    if (event.target.name === "image_url") {
      if (form.image_url && form.image_url.length < 1) {
        setErrors((e) => ({
          ...e,
          image_url: "imageUrl is Empty",
        }));
      } else {
        setErrors((e) => ({ ...e, image_url: null }));
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async () => {
    setIsLoading(true);
    setErrors((e) => ({ ...e, form: null }));
    try {
      const res = await axios.post("http://localhost:3001/nutrition/create/", {
        name: form.name,
        category: form.category,
        calories: form.calories,
        image_url: form.image_url,
        user_id: appState.user.id,
      });
        

      if (res?.data) {
        console.log(res);
        setIsLoading(false);
        navigate("/nutrition");
      } else {
        setErrors((e) => ({
          ...e,
          form: "Something went wrong with nutrition",
        }));
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      const message = err?.response?.data?.error?.message;
      setErrors((e) => ({
        ...e,
        form: message ? String(message) : String(err),
      }));
      setIsLoading(false);
    }
  };

  return (
    <div className="nutrition-form">
      {errors.form && <span className="error">{errors.form}</span>}
      <div className="input-field">
        <label>Name</label>
        <input
          placeholder="Nutrition Name"
          name="name"
          value={form.name}
          onChange={handleOnInputChange}
        />
      </div>
      {errors.name && <span className="error">{errors.name}</span>}
      <div className="input-field">
        <label>Category</label>
        <input
          placeholder="Nutrition Category"
          name="category"
          value={form.category}
          onChange={handleOnInputChange}
        />
      </div>
      <div className="names-field">
        <div className="fname">
          <div className="input-field">
            <label>Quantity</label>
            <input
              placeholder="Quantity"
              name="quantity"
              onChange={handleOnInputChange}
            />
            {errors.quantity && (
              <span className="error">{errors.quantity}</span>
            )}
          </div>
        </div>
        <div className="lname">
          <div className="input-field">
            <label>Calories</label>
            <input
              placeholder="Categories"
              name="categories"
              value={form.categories}
              onChange={handleOnInputChange}
            />
            {errors.categories && (
              <span className="error">{errors.categories}</span>
            )}
          </div>
        </div>
      </div>

      <div className="input-field">
        <label>Image Url</label>
        <input
          placeholder="Image Url"
          name="image_url"
          value={form.image_url}
          onChange={handleOnInputChange}
        />
      </div>
      <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
        {isLoading ? "Loading..." : "Create Account"}
      </button>
      <hr className="separator" />
    </div>
  );
}
