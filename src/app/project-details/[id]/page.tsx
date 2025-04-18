// Import necessary modules and components
import ProjectDetails from '@/components/inner-pages/project-details';
import Wrapper from '@/layout/Wrapper';
import GETDATA from '@/queries/getPosts'; // Assuming this contains the GraphQL query
import { useQuery } from '@apollo/client';
import React from 'react';

export const metadata: { title: string } = {
  title: "Project Details Tecz - IT Solutions & Technology React Next js Template",
};

// Interface for component props
interface IndexProps {
  params: {
    id: string;
  };
}

// Function to generate static parameters for dynamic routes
export async function generateStaticParams() {
  const graphql = JSON.stringify({
    query: `
      query Projects {
        projects {
          id
        }
      }
    `,
    variables: {},
  });

  const requestOptions = {
    method: "POST",
    body: graphql,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const fetchData = await fetch(`https://api.hnhtechsolutions.com/graphql`, requestOptions);
    if (!fetchData.ok) {
      throw new Error(`Failed to fetch data, status: ${fetchData.status}`);
    }

    const res = await fetchData.json();
    if (!res.data || !res.data.projects) {
      throw new Error("No projects data returned from the API");
    }

    return res.data.projects.map((post: { id: number }) => ({
      id: post.id.toString(),
    }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return []; // Return an empty array if there's an error
  }
}

// Index component to display project details
const Index: React.FC<IndexProps> = ({ params: { id } }) => {
  // Convert the id to a number
  const convertNumber: number = parseInt(id, 10);

  // Use Apollo Client's useQuery hook to fetch project details
  const { loading, error, data } = useQuery(GETDATA, {
    variables: { id: convertNumber.toString() },
  });

  // Display loading and error messages
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching project details: {error.message}</p>;

  // Render the project details component
  return (
    <Wrapper>
      <ProjectDetails id={convertNumber}  />
    </Wrapper>
  );
};

export default Index;
