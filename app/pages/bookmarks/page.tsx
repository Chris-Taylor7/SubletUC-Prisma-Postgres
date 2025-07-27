'use client';
import { Title, Card, Text, Button } from '@mantine/core';

export default function BookmarksPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Title order={2} c="#e00122" mb="lg">Saved Listings</Title>
      <Card shadow="sm" padding="lg" radius="md" withBorder mb="md">
        <Text fw={500}>315 McMillan Ave</Text>
        <Text c="dimmed" size="sm">1 Bed · $750/mo</Text>
        <Button color="red" mt="md">View</Button>
      </Card>
    </div>
  );
}
