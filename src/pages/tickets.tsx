import React, { useState } from 'react';
import 'src/app/globals.css';
import MyLayout from '@/app/MyLayout';
import TicketData from '@/types/tickets';
import postData from './api/posttickets';

const CheckoutForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);

  const ticketInfo: TicketData = {
    name: name,
    email: email,
    paymentMethod: paymentMethod,
    ticketType: selectedOption,
  };

  return (
    <MyLayout>
      <div>
        <main className="flex items-center justify-center min-h-screen">
          <div className="max-w-lg p-6 bg-white rounded-md shadow-md w-full">
            <h2 className="text-4xl font-bold mb-8">Checkout</h2>
            {/* Biljettalternativ */}
            <div className="mb-4">
              <label className="block text-sm font-medium">
                Biljettalternativ
              </label>
              <select
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="">Välj biljettalternativ</option>
                <option value="Saturday">Dagspass lördag</option>
                <option value="Sunday">Dagspass söndag</option>
                <option value="Weekend">Hela helgen pass</option>
              </select>
            </div>

            {/* Kontaktuppgifter */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Namn</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                E-postadress
              </label>
              <input
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Betalningsalternativ */}
            <div className="mb-4">
              <label className="block text-sm font-medium">
                Betalningsalternativ
              </label>
              <div className="mt-1 grid grid-cols-2 gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="CreditCard"
                    checked={paymentMethod === 'CreditCard'}
                    onChange={() => setPaymentMethod('CreditCard')}
                    className="mr-2"
                  />
                  Kreditkort
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="PayPal"
                    checked={paymentMethod === 'PayPal'}
                    onChange={() => setPaymentMethod('PayPal')}
                    className="mr-2"
                  />
                  PayPal
                </label>
              </div>
            </div>

            {/* Godkänn villkor */}
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={() => setAgreeTerms(!agreeTerms)}
                  className="mr-2"
                />
                Jag godkänner villkoren
              </label>
            </div>

            {/* Beställningsknapp */}
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={() =>
                postData(ticketInfo)
                  .then(() => alert('Tack för din beställning!'))
                  .catch((error) => alert('Något gick fel: ' + error))
              }
              disabled={
                !selectedOption ||
                !name ||
                !email ||
                !paymentMethod ||
                !agreeTerms
              }
            >
              Beställ biljetter
            </button>
          </div>
        </main>
      </div>
    </MyLayout>
  );
};

export default CheckoutForm;
