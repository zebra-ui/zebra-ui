FROM node:18.18.0
ENV NODE_ENV=production
ENV HOST 0.0.0.0
RUN mkdir -p /zebra-ui-docs-docker
COPY .output/  /zebra-ui-docs-docker/
WORKDIR /zebra-ui-docs-docker
EXPOSE 3000
CMD ["node","./server/index.mjs"]