Instead of running docker command everytime:
docker build -fDockerfile.dev .
docker run -p 8000:3000 -v $(pwd):/app <image_name> 


we can create docker-compose file to automate the process instead of executing the command again and again



docker-compose.yml file
version: '3'
services:
  react-app: 
    build: 
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "8000:3000"
    volumes:
      - .:/app
  tests:
    build: 
      context: .
      dockerfile: Dockerfile.dev
    volumes:
      - .:/app
    command: ["npm", "run", "test"]
