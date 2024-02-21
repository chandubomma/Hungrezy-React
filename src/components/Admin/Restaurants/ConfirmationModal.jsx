const ConfirmationModal = ({ toggleModal, restaurantId, state }) => {
  const label =
    state === "approved"
      ? "approve"
      : state === "suspended"
      ? "suspend"
      : "reject";

  const handleConfirmation = async (state) => {
    toggleModal(state);
    // TODO: // Add the logic to approve, suspend or reject the restaurant
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <h1 className="text-xl font-medium mb-4">Are you sure?</h1>
        <p className="text-gray-500 mb-4">
          Are you sure you want to {label} this restaurant?
        </p>
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700"
            onClick={() => toggleModal(null)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 rounded-lg text-white"
            onClick={() => handleConfirmation(state)}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
