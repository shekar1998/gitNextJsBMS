import React from 'react';
import { useRouter } from 'next/dist/client/router';
import Layout from '../../components/layout';

export default function SingleEvent() {
  const router = useRouter();
  console.log(router.query.event_id);
  
  return (
    <div>
      <Layout title={router.query.event_id} />
      <h1>Single Event</h1>
    </div>
  );
}
