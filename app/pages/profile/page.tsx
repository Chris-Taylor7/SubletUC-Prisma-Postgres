'use client';
import { Title, Avatar, Text, Button, Stack } from '@mantine/core';

export default function ProfilePage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Title order={2} c="#e00122" mb="lg">My Profile</Title>
      <Stack align="center">
        <Avatar size="xl" radius="xl" />
        <Text fw={600}>Your Name</Text>
        <Text c="dimmed">you@ucmail.uc.edu</Text>
        <Button color="red">Edit Profile</Button>
      </Stack>
    </div>
  );
}
