import InputComponent from "../components/InputComponent";
import { useState } from "react";
import { productForm } from "../interfaces/FormInterface";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const AddProduct = () => {
  const { verifyAuth } = useAuth();
  const [productImage, setProductImage] = useState<File | undefined>(undefined);
  const handleSubmit = (e: React.FormEvent<productForm>) => {
    e.preventDefault();
    const target = e.currentTarget.elements;
    if (
      productImage === undefined ||
      !target.profilePicture.value ||
      !target.productName.value ||
      !target.productCategory.value ||
      !target.productPrice.value ||
      !target.productQuantity.value ||
      !target.productDescription.value
    )
      return toast.error("All fields are required");

    try {
      verifyAuth();
      toast.success("Add New Product Success");
    } catch (err) {
      toast.error("Add New Product Failed");
    }
  };
  return (
    <div
      style={{
        width: "60%",
        height: "80vh",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "25px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h1 className="text-center mb-3">Add New Product</h1>
        <InputComponent
          label="Product Image:"
          accept=".png, .jpg, .jpeg"
          changeValue={(e) => {
            const files = e.target.files ? e.target.files[0] : undefined;
            setProductImage(files);
          }}
          name="profilePicture"
          placeholder="Profile Picture"
          type="file"
        />
        <InputComponent
          label="Product Name:"
          type="text"
          placeholder="Product name"
          name="productName"
        />
        <InputComponent
          label="Product Category:"
          type="text"
          placeholder="Product Category"
          name="productCategory"
        />
        <InputComponent
          label="Product Price:"
          type="text"
          placeholder="Product Price"
          name="productPrice"
        />
        <InputComponent
          label="Product Quantity:"
          type="text"
          placeholder="Product Quantity"
          name="productQuantity"
        />
        <div className="d-flex flex-column mb-3">
          <label>Product Description:</label>
          <textarea
            rows={5}
            cols={5}
            name="productDescription"
            required
            maxLength={256}
            style={{ resize: "none" }}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
