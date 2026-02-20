/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect, useState } from 'react';
import { ITutorProfile } from '@/interfaces/tutor.interface';
import { fetcher } from '@/api/fetcher.api';
import TutorFilters from './TutorFilters';
import TutorCard from './TutorCard';

const TutorsContainer = () => {
  const [tutors, setTutors] = useState<ITutorProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState({
    search: '',
    category: '',
    sort: '',
  });

  useEffect(() => {
    const loadTutors = async () => {
      try {
        setLoading(true);
        setError('');

        const queryString = new URLSearchParams(
          query as Record<string, string>,
        ).toString();

        const data = await fetcher(`/tutors?${queryString}`);
        setTutors(data);
      } catch (err) {
        setError('Failed to load tutors');
      } finally {
        setLoading(false);
      }
    };

    loadTutors();
  }, [query]);

  if (loading)
    return <div className="py-32 text-center text-lg">Loading tutors...</div>;

  if (error)
    return <div className="py-32 text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <TutorFilters query={query} setQuery={setQuery} />

      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {tutors.map(tutor => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </div>

      {tutors.length === 0 && (
        <div className="text-center mt-16 text-gray-500">No tutors found.</div>
      )}
    </div>
  );
};

export default TutorsContainer;
