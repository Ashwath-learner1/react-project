import React from "react";

function WithdrawModal({ closeModal }) {
  const handleWithdraw = () => {
    // handle withdrawal logic
    closeModal();
  };

  return (
    <div>
      <h2>Withdraw Funds</h2>
      <p>Are you sure you want to withdraw your jewel?</p>
      <button onClick={handleWithdraw}>Withdraw</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
}

export default WithdrawModal;
