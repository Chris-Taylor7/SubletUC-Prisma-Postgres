'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

const Header: React.FC = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const isActive = (pathname: string) => router.pathname === pathname;

  return (
    <nav>
      <div className="left">
        <Link href="/" className={`bold ${isActive('/') ? 'active' : ''}`}>
          Feed
        </Link>
        {session && (
          <Link href="/drafts" className={isActive('/drafts') ? 'active' : ''}>
            My drafts
          </Link>
        )}
      </div>

      <div className="right">
        {status === 'loading' ? (
          <p>Validating session ...</p>
        ) : session ? (
          <>
            <p>
              {session.user?.name} ({session.user?.email})
            </p>
            <Link href="/create" className="button">
              New post
            </Link>
            <button onClick={() => signOut()} className="button">
              Log out
            </button>
          </>
        ) : (
          <Link href="/api/auth/signin" className="button">
            Log in
          </Link>
        )}
      </div>

      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }

        .left,
        .right {
          display: flex;
          align-items: center;
        }

        .left a,
        .right a,
        .right button {
          text-decoration: none;
          color: var(--geist-foreground);
          display: inline-block;
          margin-left: 1rem;
        }

        .bold {
          font-weight: bold;
        }

        .active {
          color: gray;
        }

        .right {
          margin-left: auto;
        }

        .right p {
          font-size: 13px;
          padding-right: 1rem;
        }

        .button {
          border: 1px solid var(--geist-foreground);
          padding: 0.5rem 1rem;
          border-radius: 3px;
          background: none;
          cursor: pointer;
        }

        button {
          border: none;
          background: none;
        }
      `}</style>
    </nav>
  );
};

export default Header;
