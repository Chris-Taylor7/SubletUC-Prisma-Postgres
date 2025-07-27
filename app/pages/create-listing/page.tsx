'use client';

import {
  TextInput,
  Textarea,
  Checkbox,
  NumberInput,
  Select,
  Button,
  Title,
  Group,
  Stack,
  FileInput,
} from '@mantine/core';
import { useState } from 'react';

export default function CreateListingPage() {
  const [sharedRoom, setSharedRoom] = useState(false);
  const [roommates, setRoommates] = useState([{ gender: '', graduationYear: '' }]);

  type RoommateKey = 'gender' | 'graduationYear';

  const handleRoommateChange = (
    index: number,
    key: RoommateKey,
    value: string | number
  ) => {
    const updated = [...roommates];
    updated[index] = {
      ...updated[index],
      [key]: value,
    };
    setRoommates(updated);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Title order={2} c="#e00122" mb="md">Create a Listing</Title>
      <form className="space-y-4 max-w-2xl">
        <TextInput label="Address" required />
        <NumberInput label="Rent (monthly)" required prefix="$" />
        <TextInput label="Available From" placeholder="YYYY-MM-DD" required />
        <NumberInput label="Bedrooms" required />
        <NumberInput label="Bathrooms" required />
        <Textarea label="Description" required />

        <Checkbox label="Utilities Included in Rent" />
        <NumberInput label="Average Utilities per Month" prefix="$" />

        <Title order={4}>Roommates</Title>
        {roommates.map((roommate, index) => (
          <Group key={index}>
            <Select
              label="Gender"
              data={['male', 'female', 'other']}
              onChange={(value) => handleRoommateChange(index, 'gender', value!)}
            />
            <NumberInput
              label="Graduation Year"
              onChange={(value) => handleRoommateChange(index, 'graduationYear', value as number)}
            />
          </Group>
        ))}
        <Button variant="light" color="gray" onClick={() => setRoommates([...roommates, { gender: '', graduationYear: '' }])}>
          Add Roommate
        </Button>

        <Checkbox
          label="Shared Room"
          checked={sharedRoom}
          onChange={(event) => setSharedRoom(event.currentTarget.checked)}
        />
        {sharedRoom && (
          <NumberInput label="How many roommates in shared room?" />
        )}

        <Checkbox label="Cats and Dogs Allowed" />
        <Checkbox label="Washer/Dryer Included" />
        <Checkbox label="Off-Street Parking" />
        <Checkbox label="Driveway" />

        <TextInput label="Distance From Campus" placeholder="e.g. 0.5 miles" />

        <FileInput label="Upload Photo" accept="image/*" />

        <Button type="submit" color="red" mt="md">Submit Listing</Button>
      </form>
    </div>
  );
}
