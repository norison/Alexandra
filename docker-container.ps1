docker build -t alexandra-image .
docker run -d --name alexandra-container -p 8080:80 alexandra-image