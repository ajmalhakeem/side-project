import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Table } from "../components/Table";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Table
      title={""}
      content={""}
      numberToDisplay={2}
      extraProp1="please don't remove"
    ></Table>
  );
};

export default Home;
