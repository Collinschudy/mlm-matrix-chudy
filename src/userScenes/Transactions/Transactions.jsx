import React, { useEffect, useState } from "react";
import styles from "./transactions.module.css";
import { Box } from "@mui/material";
import AdminHeader from "../userGlobal/AdminHeader";
import { DataGrid } from "@mui/x-data-grid";

import axios from "axios";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectUserTransactions,
  selectUserTokenAndEmail,
} from "../../redux/userInfo/userSelect";
import { setUserTransactions } from "../../redux/userInfo/userInfoAction";

const Transactions = ({
  userVerify,
  setUserTransactions,
  userTransactions,
}) => {
  const [ref, setRef] = useState("");
  const { token } = userVerify;
  useEffect(() => {
    const fetchTransactions = async () => {
      const url = "https://mlm.zurupevarietiesstore.com/api/transactions/user";
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const res = await axios.get(url, { headers });
        const userTxns = res.data.data.transactions.data;
        const sorted = userTxns.sort((a, b) => a.id - b.id);
        setRef(res.data.data.transactions.data.reference);
        setUserTransactions(userTxns);
        console.log(userTransactions);
      } catch (error) {
        console.log(error);
      }
    };
    return () => {
      fetchTransactions();
    };
  }, [token, ref]);

  return (
    <>
      <AdminHeader
        title="Transactions"
        subtitle="Welcome to your transactions"
      />

      <div className={styles.transactions}>
        {/* <div className={styles.txnbox}>
          <DataGrid rows={userTransactions} columns={columns} />
        </div> */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th className={styles.hide}>Email</th>
              <th className={styles.hide}>Amount</th>
              <th className={styles.hide}>Phone Number</th>
              <th>TransactionId</th>
              <th>Status</th>
            </tr>
          </thead>
          {userTransactions.map((trx, idx) => {
            const { reference, gateway_response, id, email, phone, amount, status } =
              trx;
            return (
              <tbody key={id} className={styles.tbody}>
                <tr>
                  <td className={styles.td}>{id}</td>
                  <td className={styles.hide}>{email}</td>
                  <td className={styles.hide}>{amount}</td>
                  <td className={styles.hide}>{phone}</td>
                  <td>{reference}</td>
                  <td>{status}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  userTransactions: selectUserTransactions,
  userVerify: selectUserTokenAndEmail,
});
const mapDispatchToProps = (dispatch) => ({
  setUserTransactions: (transactions) =>
    dispatch(setUserTransactions(transactions)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
