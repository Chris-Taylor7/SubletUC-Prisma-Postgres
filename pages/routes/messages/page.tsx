'use client';
import { Title, Text, Paper } from '@mantine/core';

export default function MessagesPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Title order={2} c="#e00122" mb="lg">Messages</Title>
      <Paper shadow="xs" p="md" mb="sm">
        <Text fw={500}>From: Alex Bearcat</Text>
        <Text size="sm" c="dimmed">Hey! I'm interested in your listing near campus.</Text>
      </Paper>
      <Paper shadow="xs" p="md">
        <Text fw={500}>From: Jordan Cincy</Text>
        <Text size="sm" c="dimmed">Is the apartment still available?</Text>
      </Paper>
    </div>
  );
}
