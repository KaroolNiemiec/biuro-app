import * as React from "react";
import Layout from "../components/Layout";
import FeesList from "../components/FeesList";

export default function TaxesFees() {
  const taxesMock = [
    {
      name: "Składki ZUS",
      price: 1457.49,
      accountNumber: "121234123412341234",
      paymentDeadline: "2014-02-11",
      isPayed: false,
      createdAt: "2020-11-03",
    },
    {
      name: "Podatek PIT",
      price: 1457.49,
      accountNumber: "121234123412341234",
      paymentDeadline: "2022-12-12",
      isPayed: false,
      createdAt: "2020-11-08",
    },
    {
      name: "Usługi księgowe",
      price: 1457.49,
      accountNumber: "121234123412341234",
      paymentDeadline: "2020-12-12",
      isPayed: true,
      createdAt: "2020-11-08",
    },
    {
      name: "Podatek VAT",
      price: 1457.49,
      accountNumber: "121234123412341234",
      paymentDeadline: "2020-12-12",
      isPayed: false,
      createdAt: "2020-11-08",
    },
  ];

  return (
    <Layout pageName="Podatki i Opłaty">
      <FeesList data={taxesMock} />
    </Layout>
  );
}
