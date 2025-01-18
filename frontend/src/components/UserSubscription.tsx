import React, { useEffect, useState } from 'react';

interface UserSubscriptionProps {
  subscriptionPlan: string;
  billingHistory: {
    date: string;
    amount: string;
    status: string;
  }[];
  paymentMethods: {
    id: number;
    type: string;
    last4: string;
  }[];
  onPaymentMethodUpdate: (methodId: number) => void;
}

const UserSubscription: React.FC<UserSubscriptionProps> = ({
  subscriptionPlan,
  billingHistory,
  paymentMethods,
  onPaymentMethodUpdate,
}) => {
  const [fetchedSubscriptionPlan, setFetchedSubscriptionPlan] = useState(subscriptionPlan);
  const [fetchedBillingHistory, setFetchedBillingHistory] = useState(billingHistory);
  const [fetchedPaymentMethods, setFetchedPaymentMethods] = useState(paymentMethods);

  useEffect(() => {
    const fetchUserSubscriptionData = async () => {
      try {
        const response = await fetch('/api/user-subscription');
        const data = await response.json();
        setFetchedSubscriptionPlan(data.subscriptionPlan);
        setFetchedBillingHistory(data.billingHistory);
        setFetchedPaymentMethods(data.paymentMethods);
      } catch (error) {
        console.error('Error fetching user subscription data:', error);
      }
    };

    fetchUserSubscriptionData();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Subscription & Billing</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Current Plan</h3>
        <p>{fetchedSubscriptionPlan}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Billing History</h3>
        <ul>
          {fetchedBillingHistory.map((entry, index) => (
            <li key={index}>
              {entry.date}: {entry.amount} - {entry.status}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Payment Methods</h3>
        <ul>
          {fetchedPaymentMethods.map((method) => (
            <li key={method.id}>
              {method.type} ending in {method.last4}
              <button
                onClick={() => onPaymentMethodUpdate(method.id)}
                className="ml-2 p-1 bg-blue-500 text-white rounded-lg"
              >
                Update
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserSubscription;
