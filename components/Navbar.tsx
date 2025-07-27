'use client';

import { useDisclosure } from '@mantine/hooks';
import { Burger, Drawer, Button, Stack, Group, Box, Avatar } from '@mantine/core';
import Link from 'next/link';
import { FaBookmark } from "react-icons/fa";
export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <Box>
      <Group justify="space-between" p="md" bg="gray.0">
        {/* Burger on the left */}
        <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />

        {/* App title or logo in center */}
        <Box fw={700} fz="xl">
          My App
        </Box>

        {/* Placeholder right side (can be a user menu later) */}
        <Box w={40} />
      </Group>

      {/* Drawer for nav buttons */}
      <Drawer opened={opened} onClose={close} title="Navigation" padding="md">
        <Stack>
          <Link href="/" passHref>
            <Button  variant="gradient"
      gradient={{ from: 'rgba(3, 1, 1, 1)', to: 'red', deg: 0 }} size="compact-lg"  onClick={close}>
              Home
            </Button>
          </Link>

          <Link href="./pages/create-listing" passHref>
            <Button variant="gradient"
      gradient={{ from: 'rgba(3, 1, 1, 1)', to: 'red', deg: 0 }} size="compact-lg"  onClick={close}>
              Create a Listing
            </Button>
          </Link> 

          <Link href="./pages/view-listings" passHref>
            <Button variant="gradient"
      gradient={{ from: 'rgba(3, 1, 1, 1)', to: 'red', deg: 0 }} size="compact-lg"  onClick={close}>
              View Available Listings
            </Button>
          </Link>

          <Link href="./pages/messages" passHref>
            <Button variant="gradient"
      gradient={{ from: 'rgba(3, 1, 1, 1)', to: 'red', deg: 0 }} size="compact-lg"  onClick={close}>
              Messages
            </Button>
          </Link>

          <Link href="./pages/bookmarks" passHref>
            <Button variant="gradient"
      gradient={{ from: 'rgba(3, 1, 1, 1)', to: 'red', deg: 0 }} size="compact-lg"   onClick={close}>
              <FaBookmark />
            </Button>
          </Link>

          <Link href="./pages/profile" passHref>
            <Avatar variant="filled" radius="lg" color="red" src="" onClick={close} />
          </Link>

        </Stack>
      </Drawer>
    </Box>
  );
}