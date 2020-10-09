module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_API_ID'),
        secretAccessKey: env('AWS_API_KEY'),
        region:  env('AWS_API_REGION'),
        params: {
          Bucket:  env('AWS_BUCKET_NAME'),
        },
      },
    },
  });