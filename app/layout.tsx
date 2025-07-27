import '@mantine/core/styles.css';
import { MantineProvider, mantineHtmlProps } from '@mantine/core';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (      
      <div {...mantineHtmlProps}>
        <MantineProvider>
          {children}
        </MantineProvider>
      </div>
  );
}