import { createNextRoute, createNextRouter } from '@ts-rest/next';
import { apiNested } from '@mgh-tools/contracts';
import { postsService } from '../../components/be/posts';

const postsRouter = createNextRoute(apiNested.posts, {
  createPost: async (args) => {
    const newPost = await postsService.createPost(args.body);

    return {
      status: 201,
      body: newPost,
    };
  },
  updatePost: async (args) => {
    return {
      status: 200,
      body: {
        id: '1',
        title: 'title',
        tags: [],
        description: '',
        content: '',
        published: false,
      },
    };
  },
  deletePost: async (args) => {
    return {
      status: 200,
      body: { message: 'Post deleted' },
    };
  },
  getPost: async ({ params }) => {
    const post = await postsService.getPost(params.id);

    if (!post) {
      return {
        status: 404,
        body: null,
      };
    }

    return {
      status: 200,
      body: post,
    };
  },
  getPosts: async (args) => {

    console.log('getPosts: args', args);
    const { posts, count } = await postsService.getPosts({
      skip: args.query.skip,
      take: args.query.take,
    });

    console.log('getPosts: posts', posts,count);

    return {
      status: 200,
      body: {
        posts: posts,
        count: count,
        skip: args.query.skip,
        take: args.query.take,
      },
    };
  },
  testPathParams: async (args) => {
    return {
      status: 200,
      body: args.params,
    };
  },
});

const healthRouter = createNextRoute(apiNested.health, {
  check: async (args) => {
    return {
      status: 200,
      body: { message: 'OK' },
    };
  },
});

const router = createNextRoute(apiNested, {
  posts: postsRouter,
  health: healthRouter,
});

export default createNextRouter(apiNested, router);
