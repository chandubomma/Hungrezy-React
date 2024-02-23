import { motion } from "framer-motion";
import { FaArrowRight, FaChevronRight } from "react-icons/fa6";
import { TiArrowBackOutline } from "react-icons/ti";
import { RiDraftLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { addMenuItem, selectMenu } from "../../../redux/slices/menuSlice";
import { useState } from "react";
import { toast } from "sonner";

const AddMenu = () => {
  const emptyItem = {
    id: "",
    name: "",
    price: 0,
    category: "",
    quantity: 1,
    discount: 0,
    available: true,
  };
  const [menuItem, setMenuItem] = useState(emptyItem);
  const dispatch = useDispatch();
  const formVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddMenuItem = () => {
    const temp = menuItem;
    temp.id = `${temp.category.replace(/\s+/g, "")}-${temp.name.replace(
      /\s+/g,
      ""
    )}`;
    dispatch(addMenuItem(temp));
    toast.success("Menu Item added successfully!");
    setMenuItem(emptyItem);
  };

  return (
    <div className="px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">Add Menu</h1>
        <div className="flex items-center py-2.5 gap-2 mx-5">
          <p>Restaurant</p>
          <span>
            <FaChevronRight className="text-gray-500" />
          </span>
          <p className="text-orange-500 underline">Add Menu</p>
        </div>
      </div>
      <div className="h-fit flex md:flex-row flex-col w-full gap-x-10 items-center justify-center">
        <form className="flex flex-col w-[50rem] gap-4 pb-20">
          <motion.div
            variants={formVariants}
            className="flex flex-col form-floating mt-2 gap-4"
          >
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="form-floating">
                <input
                  className="form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full"
                  id="menuItemName"
                  placeholder="Menu Item Name"
                  name="name"
                  value={menuItem.name}
                  type="text"
                  onChange={handleChange}
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
                  name="price"
                  type="number"
                  value={menuItem.price}
                  onChange={handleChange}
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
              <input
                className="form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full"
                id="menuItemCategory"
                placeholder="Menu Item Category"
                name="category"
                onChange={handleChange}
                value={menuItem.category}
              ></input>
              <label htmlFor="menuItemCategory" className="text-gray-500">
                Menu Item Category
              </label>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="form-floating">
                <input
                  className="form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full"
                  id="menuItemQuantity"
                  placeholder="Menu Item Quantity"
                  name="quantity"
                  type="number"
                  value={menuItem.quantity}
                  onChange={handleChange}
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
                  name="discount"
                  type="number"
                  onChange={handleChange}
                  value={menuItem.discount}
                />
                <label htmlFor="menuItemDiscount" className="text-gray-500">
                  Menu Item Discount
                </label>
              </div>
            </div>
          </motion.div>
          <div className="flex items-center justify-center gap-x-20">
            <motion.button
              onClick={() => window.history.back()}
              type="button"
              className="py-2 px-4 bg-red-500 w-fit self-center hover:bg-red-700 justify-center transition-colors duration-300 text-white rounded-md flex items-center"
              whileHover={{ scale: 1.005 }}
            >
              <span className="align-baseline text-center">Cancel</span>
              <TiArrowBackOutline className="ml-2 align-baseline" />
            </motion.button>
            <motion.button
              type="button"
              className="py-2 px-4 bg-amber-500 w-fit self-center hover:bg-amber-600 justify-center transition-colors duration-300 text-white rounded-md flex items-center"
              whileHover={{ scale: 1.005 }}
              onClick={handleAddMenuItem}
            >
              <span className="align-baseline text-center">Add</span>
              <FaArrowRight className="ml-2 align-baseline" />
            </motion.button>

            <motion.button
              type="button"
              className="py-2 px-4 bg-gray-200 w-fit self-center justify-center hover:bg-gray-300 transition-colors duration-300 text-gray-800 rounded-md flex items-center"
              whileHover={{ scale: 1.005 }}
            >
              <span className="align-baseline text-center">Draft</span>
              <RiDraftLine className="ml-2 align-baseline" />
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;
