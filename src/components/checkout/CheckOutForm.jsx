import { motion } from "framer-motion";
import { FaShoppingBag } from "react-icons/fa";
import paypal from "./../../assets/paypal.png";
import maestro from "./../../assets/maestro.png";
import visa from "./../../assets/visa.png";
import { useState } from "react";

const CheckOutForm = () => {
  const formVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const [selectedTab, setSelectedTab] = useState("card");
  return (
    <div className="flex-1">
      <motion.div variants={formVariants}>
        <h2 className="text-3xl font-bold mb-4 text-orange-500 lg:my-0 mt-16 tracking-wide">
          CHECKOUT
        </h2>
        <p className="text-4xl my-4 font-light">PAYMENT AND DELIVERY DETAILS</p>
        <p className="text-gray-600 text-2xl w-2/3 my-4 font-bold">
          Buyer Information
        </p>
        <form className="flex flex-col gap-4 pb-20">
          <motion.div variants={formVariants} className="form-floating mt-4">
            <div className="form-floating">
              <input
                className="form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full"
                id="fullName"
                placeholder="Full Name"
                name="fullName"
                type="text"
              />
              <label htmlFor="fullName" className="text-gray-500">
                Full Name
              </label>
            </div>
          </motion.div>

          <div className="flex justify-between gap-5">
            <motion.div
              variants={formVariants}
              className="form-floating flex-1"
            >
              <div className="form-floating">
                <input
                  className="form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full"
                  id="email"
                  placeholder="Enter Email"
                  name="email"
                  type="email"
                />
                <label htmlFor="email" className="text-gray-500">
                  Email
                </label>
              </div>
            </motion.div>
            <motion.div
              variants={formVariants}
              className="form-floating flex-1"
            >
              <div className="form-floating">
                <input
                  className="form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full"
                  id="phone"
                  placeholder="Phone Number"
                  name="phone"
                  type="text"
                />
                <label htmlFor="phone" className="text-gray-500">
                  Phone
                </label>
              </div>
            </motion.div>
          </div>

          <p className="text-gray-600 text-2xl w-2/3 mb-4 font-bold">
            Delivery addresses
          </p>

          <motion.div variants={formVariants} className="form-floating">
            <div className="form-floating">
              <input
                className="form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full"
                id="address"
                placeholder="Address"
                name="address"
                type="text"
              />
              <label htmlFor="address" className="text-gray-500">
                Address
              </label>
            </div>
          </motion.div>

          <div className="flex justify-between gap-5">
            <motion.div
              variants={formVariants}
              className="form-floating flex-1"
            >
              <div className="form-floating">
                <input
                  className="form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full"
                  id="city"
                  placeholder="City"
                  name="city"
                  type="text"
                />
                <label htmlFor="city" className="text-gray-500">
                  City
                </label>
              </div>
            </motion.div>
            <motion.div
              variants={formVariants}
              className="form-floating flex-1"
            >
              <div className="form-floating">
                <input
                  className="form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full"
                  id="state"
                  placeholder="State"
                  name="state"
                  type="text"
                />
                <label htmlFor="state" className="text-gray-500">
                  State
                </label>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-between gap-5">
            <motion.div
              variants={formVariants}
              className="form-floating flex-1"
            >
              <div className="form-floating">
                <input
                  className="form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full"
                  id="zip"
                  placeholder="Zip"
                  name="zip"
                  type="text"
                />
                <label htmlFor="zip" className="text-gray-500">
                  Zip
                </label>
              </div>
            </motion.div>
            <motion.div
              variants={formVariants}
              className="form-floating flex-1"
            >
              <div className="form-floating">
                <input
                  className="form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full"
                  id="country"
                  placeholder="Country"
                  name="country"
                  type="text"
                />
                <label htmlFor="country" className="text-gray-500">
                  Country
                </label>
              </div>
            </motion.div>
          </div>

          <p className="text-gray-600 text-2xl w-2/3 mb-4 font-bold">
            Payment Method
          </p>

          <div className="flex gap-5">
            <div
              className={`cursor-pointer ${
                selectedTab === "card"
                  ? "border-b-2 border-amber-600 text-amber-600 pb-2"
                  : ""
              }`}
              onClick={() => setSelectedTab("card")}
            >
              <p className="text-2xl font-bold">Card</p>
            </div>
            <div
              className={`cursor-pointer ${
                selectedTab === "cash"
                  ? "border-b-2 pb-2 border-amber-600 text-amber-600"
                  : ""
              }`}
              onClick={() => setSelectedTab("cash")}
            >
              <p className="text-2xl font-bold">Cash</p>
            </div>
          </div>

          {selectedTab === "card" && (
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <img src={paypal} className="w-10 h-10" />
                <img src={visa} className="w-10 h-10" />
                <img src={maestro} className="w-10 h-10" />
              </div>
              <div className="flex gap-5">
                <div className="form-floating flex-1">
                  <div className="form-floating">
                    <input
                      className="form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full"
                      id="cardName"
                      placeholder="Name on Card"
                      name="cardName"
                      type="text"
                    />
                    <label htmlFor="cardName" className="text-gray-500">
                      Name on Card
                    </label>
                  </div>
                </div>
                <div className="form-floating flex-1">
                  <div className="form-floating">
                    <input
                      className="form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full"
                      id="cardNumber"
                      placeholder="Card Number"
                      name="cardNumber"
                      type="text"
                    />
                    <label htmlFor="cardNumber" className="text-gray-500">
                      Card Number
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="form-floating flex-1">
                  <div className="form-floating">
                    <input
                      className="form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full"
                      id="expiryDate"
                      placeholder="Expiry Date"
                      name="expiryDate"
                      type="text"
                    />
                    <label htmlFor="expiryDate" className="text-gray-500">
                      Expiry Date
                    </label>
                  </div>
                </div>
                <div className="form-floating flex-1">
                  <div className="form-floating">
                    <input
                      className="form-control focus:shadow-none focus:border-amber-600 rounded-md w-full h-full"
                      id="cvv"
                      placeholder="CVV"
                      name="cvv"
                      type="text"
                    />
                    <label htmlFor="cvv" className="text-gray-500">
                      CVV
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          <motion.button
            type="button"
            className="mx-auto py-3 px-8 bg-amber-500 hover:bg-amber-600 transition-colors duration-300 text-white rounded-full flex items-center"
            variants={formVariants}
          >
            <FaShoppingBag className="align-baseline" />
            <span className="ml-2 align-baseline">Place Order</span>
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default CheckOutForm;
