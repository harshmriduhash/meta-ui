'use client';
import { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import { api } from '~/trpc/react';

function useSlugAvailability() {
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const { mutateAsync: checkSlug } = api.mockUp.checkSlugAvailability.useMutation();

  const debouncedCheckSlug = useCallback(
    debounce(async (slug: string) => {
      try {
        const available = await checkSlug({ slug });
        setIsAvailable(available);
      } catch (error) {
        console.error('Error checking slug availability:', error);
      }
    }, 500),
    []
  );

  return { isAvailable, handleSlugCheck: debouncedCheckSlug };
}

export default useSlugAvailability;
