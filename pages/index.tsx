import React from "react"
import { GetStaticProps } from "next"
import prisma from '../lib/prisma';
import Navbar from "../components/Navbar";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.listing.findMany({
    where: { active: true },
    include: {
      user: {
        select: { id: true },
      },
    },
  });

  return {
    props: { feed },
    revalidate: 10, // ISR every 10 seconds
  };
};

export default function Home() {
  return <Navbar />;
}
