import { motion } from "framer-motion";
import { FaArrowRight, FaChevronRight } from "react-icons/fa6";
import { useRef } from "react";
import { LuUploadCloud } from "react-icons/lu";

const AddMenu = () => {
  const formVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const image = useRef(null);

  return (
    <div className="px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">Menu Items</h1>
        <div className="flex items-center py-3 gap-2 mx-5">
          <p>Admin</p>
          <span>
            <FaChevronRight className="text-gray-500" />
          </span>
          <p className="text-orange-500 underline">Menu Items</p>
        </div>
      </div>
      <div className="h-fit flex flex-row w-full gap-x-10">
        <motion.div
          onClick={() => image.current.click()}
          className="w-[20rem] cursor-pointer h-[20rem] my-20 object-cover rounded-full bg-orange-100 border-dotted border-2 border-orange-500 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <input
            type="file"
            name="file"
            id="file"
            className="hidden"
            ref={image}
          />
          <p className="text-center text-orange-500 text-sm mt-2 flex flex-col justify-center items-center gap-y-3">
            <LuUploadCloud className="w-10 h-10" />
            <span className="block">Upload Image</span>
          </p>
        </motion.div>
        <form className="flex flex-col w-[50rem] gap-4 pb-20">
          <motion.div
            variants={formVariants}
            className="flex flex-col form-floating mt-2 gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="form-floating">
                <input
                  className="form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full"
                  id="menuItemName"
                  placeholder="Menu Item Name"
                  name="menuItemName"
                  type="text"
                />
                <label htmlFor="menuItemName" className="text-gray-500">
                  Menu Item Name
                </label>
              </div>

              <div className="form-floating">
                <input
                  className="form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full"
                  id="menuItemPrice"
                  placeholder="Menu Item Price"
                  name="menuItemPrice"
                  type="number"
                />
                <label htmlFor="menuItemPrice" className="text-gray-500">
                  Menu Item Price
                </label>
              </div>
            </div>

            {/* TEXTAREA DESCRIPTION */}
            <div className="form-floating">
              <textarea
                className="form-control focus:shadow-none focus:border-amber-600 rounded-md w-full resize-none h-96"
                id="menuItemDescription"
                placeholder="Menu Item Description"
                name="menuItemDescription"
                style={{ height: "200px" }}
              />
              <label htmlFor="menuItemDescription" className="text-gray-500">
                Menu Item Description
              </label>
            </div>

            <div className="form-floating">
              <select
                className="form-select focus:shadow-none focus:border-amber-600 rounded-md w-full h-full cursor-pointer"
                id="menuItemCategory"
              >
                <option value="main-course">Main Course</option>
                <option value="appetizer">Appetizer</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
              <label htmlFor="menuItemCategory">Menu Item Category</label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="form-floating">
                <input
                  className="form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full"
                  id="menuItemQuantity"
                  placeholder="Menu Item Quantity"
                  name="menuItemQuantity"
                  type="number"
                />
                <label htmlFor="menuItemQuantity" className="text-gray-500">
                  Menu Item Quantity
                </label>
              </div>

              <div className="form-floating">
                <input
                  className="form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full"
                  id="menuItemDiscount"
                  placeholder="Menu Item Discount"
                  name="menuItemDiscount"
                  type="number"
                />
                <label htmlFor="menuItemDiscount" className="text-gray-500">
                  Menu Item Discount
                </label>
              </div>
            </div>
          </motion.div>
          <motion.button
            type="button"
            className="py-3 px-4 bg-amber-500 hover:bg-amber-600 justify-center transition-colors duration-300 text-white rounded-full flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <span className="align-baseline text-center">Add Menu Item</span>
            <FaArrowRight className="ml-2 align-baseline" />
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;
