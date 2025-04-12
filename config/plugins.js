module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  graphql: {
    config: {
      v4ComptabilityMode: false
    }
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env('DO_SPACE_ACCESS_KEY'),
            secretAccessKey: env('DO_SPACE_SECRET_KEY'),
          },
          endpoint: env('DO_SPACE_ENDPOINT'),
          region: env('DO_SPACE_REGION'),
          params: {
            Bucket: env('DO_SPACE_BUCKET'),
            ACL: 'public-read',
          },
        },
        baseUrl: env('DO_SPACE_BASE_URL'),
        uploadDir: '',
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
      // Configure additional image formats to be generated
      breakpoints: {
        xlarge: 2000,
        large: 1200,
        medium: 800,
        small: 500,
        xsmall: 300,
        thumbnail: 150,
      },
    },
  },
});
