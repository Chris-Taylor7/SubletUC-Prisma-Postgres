import { GetServerSideProps } from "next"
import prisma from "../lib/prisma";


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = Number(params?.id);

  if (isNaN(id)) {
    return {
      notFound: true,
    };
  }

  const listing = await prisma.listing.findUnique({
    where: { id },
    include: {
      user: {
        select: { fullName: true },
      },
      roommates: true,
    },
  });

  if (!listing) {
    return {
      notFound: true,
    };
  }

  return {
    props: { listing },
  };
};