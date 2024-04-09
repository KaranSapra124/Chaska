import AddProductModal from "../Modals/addProduct";

export const ProductLayout = () => {
  return (
    <>
      <div className="flex border rounded p-5">
        <h1 className="mr-5">Product Details</h1>
        <AddProductModal />
      </div>
    </>
  );
};
