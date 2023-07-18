import React, { useState } from 'react';
import {useLocation} from 'react-router-dom'
import GooglePayButton from '@google-pay/button-react'

import './DonationScreen.css'; // Import the CSS file

const DonationScreen = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const location = useLocation();
  const handleDonationAmountChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // backend logic
    console.log('Donation Amount:', donationAmount);
    // Reset the donation amount
    setDonationAmount('');
  };

  return (
    <>
       <div className="container-fluid">
          <div className="wrapper">
              <form className="donation-form">
                <h2 class="fst-italic" >Make a Donation</h2>
                <div className="m-2 w-75">
                  <h5>Funds Needed:{location.state.amtReq}</h5>
                  <label className="form-label">Donation Amount:</label>
                  <input
                      type="number"
                      className="form-control"
                      id="donationAmount"
                      name="donationAmount"
                      value={donationAmount}
                      placeholder = "Enter donation amount..."
                      onChange={handleDonationAmountChange}
                    />
                  {/* <div className="text-center">
                    <button type="submit" className="btn btn-lg btn-primary mt-5 ">Donate</button>
                  </div> */}
                  <div>
                  <GooglePayButton
                        environment="TEST" // Use "TEST" for testing, "PRODUCTION" for production
                        paymentRequest={{
                          apiVersion: 2,
                          apiVersionMinor: 0,
                          allowedPaymentMethods: [
                            {
                              type: 'CARD',
                              parameters: {
                                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                allowedCardNetworks: ['MASTERCARD', 'VISA'],
                              },
                              tokenizationSpecification: {
                                type: 'PAYMENT_GATEWAY',
                                parameters: {
                                  gateway: 'example',
                                },
                              },
                            },
                          ],
                          merchantInfo: {
                            merchantId: 'your-merchant-id',
                            merchantName: 'Your Merchant Name',
                          },
                          transactionInfo: {
                            totalPriceStatus: 'FINAL',
                            totalPrice: '1.00',
                            currencyCode: 'USD',
                          },
                        }}
                        onLoadPaymentData={paymentRequest => {
                          console.log('Payment data:', paymentRequest);
                        }}
                        // onPaymentAuthorized={paymentData => {
                        //   console.log('Payment authorized:', paymentData);
                        //   // Logic for handling the authorized payment goes here
                        //   return { transactionState: 'SUCCESS' };
                        // }}
                        // onPaymentDataChanged={paymentData => {
                        //   console.log('Payment data changed:', paymentData);
                        //   // Logic for handling the payment data change goes here
                        // }}
                        // existingPaymentMethodRequired="false"
                        // buttonColor="black"
                        // buttonType="donate"
                        // onClick={handlePayment}
                      />
                  </div>
                </div>
              </form>
          </div>
       </div>           
    </>
  );
};

export default DonationScreen;
