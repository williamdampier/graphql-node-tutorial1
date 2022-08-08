import type {
  NextPage,
  GetStaticProps,
  InferGetStaticPropsType,
  InferGetServerSidePropsType,
} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import { request } from 'graphql-request';
import { getAllPeopleQuery } from '../../constants';

const Home: NextPage = ({
  result,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.container}>
      {result.map((item: any) => {
        //render the 'result' array to the UI
        return <p key={item.id}>{item.name}</p>;
      })}
      <Link href='/addpage'>Add a new entry </Link>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await request('http://localhost:4000/graphql', getAllPeopleQuery);
  const result = res.getAllPeople;
  return {
    props: {
      result,
    },
  };
};
export default Home;
