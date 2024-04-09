import AddProductModal from "../Modals/addProduct";
import { TableLayout } from "./Table";

export const ProductLayout = () => {
  return (
    <>
      <div className="flex border flex-col rounded p-5 mt-52 h-fit m-auto">
        <div className="flex justify-between">
          <h1 className="mr-5 text-2xl">Product Details</h1>
          <AddProductModal />
        </div>
        <TableLayout />
      </div>
    </>
  );
};
