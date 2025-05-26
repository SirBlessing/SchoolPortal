import "./App.css"
import {Link} from 'react-router-dom'

function PaymentSuccess() {
  return (
    <div className="Sucesspage">
      <h2>🎉 Payment Successful!</h2>
      <p>Your payment has been verified.</p>
      <p>Reference number has been Saved.</p>
      <Link to="/dashboard"><button>Return to Dashboard</button></Link>
    </div>
  );
}

export default PaymentSuccess;