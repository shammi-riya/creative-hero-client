import { useQuery } from '@tanstack/react-query';

const useFetchCourses = () => {
  const { data: courses = [], refetch } = useQuery({
    queryKey: ['allcourse'],
    queryFn: async () => {
      const response = await fetch(`https://creative-hero-surver-shammi-riya.vercel.app
/allcourse`);
      return response.json();
    },
  });

  return [courses, refetch];
};

export default useFetchCourses;
