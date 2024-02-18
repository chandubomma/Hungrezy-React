import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa6";
import { useRef } from "react";
import { LuUploadCloud } from "react-icons/lu";
import { FiSave } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";

const EditMenu = () => {
  const formVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const image = useRef(null);

  return (
    <div className="px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">Profile</h1>
        <div className="flex items-center py-2.5 gap-2 mx-5">
          <p>Restaurant</p>
          <span>
            <FaChevronRight className="text-gray-500" />
          </span>
          <p className="text-orange-500 underline">Profile</p>
        </div>
      </div>
      <div className="h-fit flex flex-row w-full gap-x-10 border-b">
        <div
          onClick={() => image.current.click()}
          className="w-[13rem] cursor-pointer h-[13rem] my-20 object-cover rounded-full bg-orange-100 border-dotted border-2 border-orange-500 flex items-center justify-center"
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
        </div>

        <form className="flex flex-col w-[50rem] gap-4 pb-20">
          <motion.div
            variants={formVariants}
            className="flex flex-col form-floating mt-2 gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="form-floating">
                <input
                  className={`form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full`}
                  id="restaurantName"
                  placeholder="Restaurant Name"
                  name="restaurantName"
                  type="text"
                  value={"Pista House"}
                />
                <label htmlFor="restaurantName" className="text-gray-500">
                  Restaurant Name
                </label>
              </div>

              <div className="form-floating">
                <input
                  className={`form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full`}
                  id="restaurantEmail"
                  placeholder="Restaurant Email"
                  name="restaurantEmail"
                  type="email"
                  value={"pistahouse@gmail.com"}
                />
                <label htmlFor="restaurantEmail" className="text-gray-500">
                  Restaurant Email
                </label>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="form-floating">
                <select
                  className={`form-select focus:shadow-none focus:border-amber-600 rounded-md w-full h-full cursor-pointer `}
                  id="state"
                  value={"Telangana"}
                >
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
                <label htmlFor="state">State</label>
              </div>

              <div className="form-floating">
                <select
                  className={`form-select focus:shadow-none focus:border-amber-600 rounded-md w-full h-full cursor-pointer `}
                  id="city"
                  value={"Hyderabad"}
                >
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Kolkata">Kolkata</option>
                </select>
                <label htmlFor="city">City</label>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="form-floating">
                <textarea
                  className={`form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full`}
                  id="restaurantAddress"
                  placeholder="Restaurant Address"
                  name="restaurantAddress"
                  type="text"
                  value={"Hitech City"}
                  style={{ height: "100px" }}
                />
                <label htmlFor="restaurantAddress" className="text-gray-500">
                  Restaurant Address
                </label>
              </div>

              <div className="form-floating">
                <input
                  className={`form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full`}
                  id="restaurantPincode"
                  placeholder="Restaurant Pincode"
                  name="restaurantPincode"
                  type="number"
                  value={"500081"}
                />
                <label htmlFor="restaurantPincode" className="text-gray-500">
                  Restaurant Pincode
                </label>
              </div>
            </div>
          </motion.div>
          <div className="flex items-center justify-center gap-x-20">
            <motion.button
              type="button"
              className="py-2 px-4 bg-amber-500 w-fit self-center hover:bg-amber-600 justify-center transition-colors duration-300 text-white rounded-md flex items-center"
              whileHover={{ scale: 1.005 }}
            >
              <span className="align-baseline text-center">Save Changes</span>
              <FiSave className="ml-2 align-baseline" />
            </motion.button>
          </div>
        </form>
      </div>

      {/**Change Password */}
      <div className="h-fit w-full gap-x-10 border-b">
        <h1 className="text-xl font-medium my-4">Change Password</h1>
        <form className="flex flex-col gap-4 pb-20">
          <motion.div
            variants={formVariants}
            className="flex flex-col form-floating mt-2 gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="form-floating">
                <input
                  className={`form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full`}
                  id="currentPassword"
                  placeholder="Current Password"
                  name="currentPassword"
                  type="password"
                />
                <label htmlFor="currentPassword" className="text-gray-500">
                  Current Password
                </label>
              </div>

              <div className="form-floating">
                <input
                  className={`form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full`}
                  id="newPassword"
                  placeholder="New Password"
                  name="newPassword"
                  type="password"
                />
                <label htmlFor="newPassword" className="text-gray-500">
                  New Password
                </label>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-x-20">
            <motion.button
              type="button"
              className="py-2 px-4 bg-amber-500 w-fit self-center hover:bg-amber-600 justify-center transition-colors duration-300 text-white rounded-md flex items-center"
              whileHover={{ scale: 1.005 }}
            >
              <span className="align-baseline text-center">Change</span>
              <FiSave className="ml-2 align-baseline" />
            </motion.button>
          </div>
        </form>
      </div>

      {/**Delete Account */}
      <div className="h-fit w-full gap-x-10">
        <h1 className="text-xl font-medium my-4">Delete Account</h1>
        <form className="flex flex-col gap-4 pb-20">
          <motion.div
            variants={formVariants}
            className="flex flex-col form-floating mt-2 gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="form-floating">
                <input
                  className={`form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full`}
                  id="currentPassword"
                  placeholder="Current Password"
                  name="currentPassword"
                  type="password"
                />
                <label htmlFor="currentPassword" className="text-gray-500">
                  Current Password
                </label>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-x-20">
            <motion.button
              type="button"
              className="py-2 px-4 bg-red-500 w-fit self-center hover:bg-red-600 justify-center transition-colors duration-300 text-white rounded-md flex items-center"
              whileHover={{ scale: 1.005 }}
            >
              <span className="align-baseline text-center">Delete</span>
              <MdOutlineDelete className="ml-2 align-baseline" />
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMenu;
