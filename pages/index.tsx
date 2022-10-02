import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../store/actions/userActions";
import { useState, useEffect } from "react";
import TopBar from "../components/TopBar";
import Popup from "../components/Popup";

const Home: NextPage = ({ users, userActions }: any) => {
  const [userList, setUserList] = useState<any[]>([]);
  const [searchKey, setSearchKey] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    userActions.getUsers();
  }, []);

  useEffect(() => {
    if (Array.isArray(users) && users.length > 0) {
      setUserList(users);
    }
  }, [users]);

  useEffect(() => {
    if (searchKey) {
      setUserList(
        userList.filter(
          (user) =>
            user.name?.toLowerCase()?.includes(searchKey.toLowerCase()) ||
            user.email?.toLowerCase()?.includes(searchKey.toLowerCase()) ||
            user.phone?.toLowerCase()?.includes(searchKey.toLowerCase())
        )
      );
    } else {
      setUserList(users);
    }
  }, [searchKey]);

  console.log(searchKey);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>YellowPages</h1>
        <TopBar
          searchKey={searchKey}
          handleOnChange={setSearchKey}
          handleShowModal={setShowPopup}
        />

        <div className={styles.grid}>
          {Array.isArray(userList) &&
            userList.length > 0 &&
            userList.map((user) => (
              <div className={styles.card} key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.phone}</p>
              </div>
            ))}
        </div>
        <Popup show={showPopup} handleShowModal={setShowPopup} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  users: state.userReducer.users,
});

const mapDispatchToProps = (dispatch: any) => ({
  userActions: bindActionCreators(userActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
