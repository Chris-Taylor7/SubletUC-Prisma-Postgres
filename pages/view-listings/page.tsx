'use client';

import { useState } from 'react';
import { Card, Text, Button, Title, Grid, Pagination } from '@mantine/core';

const dummyListings = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  address: `123 Bearcat St #${i + 1}`,
  rent: 850 + i * 10,
  bedrooms: 2,
  bathrooms: 1,
}));

const PER_PAGE = 9;

export default function ViewListingsPage() {
  const [page, setPage] = useState(1);

  const paginatedListings = dummyListings.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Title order={2} c="#e00122" mb="lg">Available Listings</Title>
      <Grid gutter="md">
        {paginatedListings.map((listing) => (
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={listing.id}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Text fw={500}>{listing.address}</Text>
              <Text c="dimmed" size="sm">
                {listing.bedrooms} Bed / {listing.bathrooms} Bath · ${listing.rent}/mo
              </Text>
              <Button color="red" mt="md" fullWidth>
                View Details
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Pagination
        total={Math.ceil(dummyListings.length / PER_PAGE)}
        value={page}
        onChange={setPage}
        mt="xl"
        color="red"
      />
    </div>
  );
}
