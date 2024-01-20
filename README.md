Instead of running docker command everytime:
docker build -fDockerfile.dev .
docker run -p 8000:3000 -v $(pwd):/app <image_name> 


we can create docker-compose file to automate the process instead of executing the command again and again