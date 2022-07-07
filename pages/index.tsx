import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Background } from "../components/Background";
import { Table } from "../components/Table";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return <Table title={""} content={""} numberToDisplay={2}></Table>;
};

export default Home;
