import type { GetStaticProps, NextPage } from 'next';

import { Flex, Heading, Text, VStack } from '@chakra-ui/react';

import { useTranslation } from '@src/hooks/useTranslation';
import { serverSideCache } from '@src/services/ServerSideCache';
import { generateTextLinearGradient } from '@src/utils/generateGradient';
import { SEO } from '@src/components/SEO';
import { PostsDocument, usePostsQuery } from '@src/generated/graphql.blog';
import { ContentManagementClient } from '@src/services/ContentManagementClient';
import { PostCard } from '@src/components/PostCard';

const BlogPage: NextPage = () => {
  const { blogTranslation } = useTranslation();
  const [{ data }] = usePostsQuery({});
  console.info('Blog page');
  console.info('data', data?.posts);

  return (
    <Flex
      as="main"
      background="brand.background"
      width="100%"
      minHeight="calc(100vh - 8rem)"
      flexDirection="column"
      paddingTop={[4, 16]}
      paddingX={'1rem'}
    >
      <SEO title="Blog" description="Blog posts about software development" />
      <Flex width="100%" minHeight="4rem" justifyContent="flex-start">
        <Heading
          as="h1"
          fontSize="5xl"
          color="brand.primary"
          {...generateTextLinearGradient('cyan', 'red')}
          whiteSpace="pre-line"
        >
          {blogTranslation.title}
        </Heading>
      </Flex>
      <Text color="brand.secondary" fontSize="xl" marginTop="1rem">
        {blogTranslation.description}
      </Text>
      <Flex as="section" flexDirection="column" marginTop="1.5rem">
        <Text
          as="p"
          fontSize="xl"
          color="brand.primary"
          fontWeight="bold"
          marginBottom="1.5rem"
        >
          {blogTranslation.seeAllPosts}
        </Text>
        <VStack width="100%">
          {data?.posts.map(({ title, excerpt, publishedAt, slug }) => (
            <PostCard
              key={slug}
              title={title}
              description={excerpt || ''}
              createdAt={publishedAt}
              slug={slug}
              tags={[]}
            />
          ))}
        </VStack>
      </Flex>
    </Flex>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  console.info('Blog page getStaticProps');
  await ContentManagementClient.query(PostsDocument, {}).toPromise();

  return {
    props: {
      urqlState: serverSideCache.extractData(),
    },
  };
};
