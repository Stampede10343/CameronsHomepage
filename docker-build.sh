docker build -t homepage:build .
mkdir output
docker run -it --rm -v $(pwd):/app -v $(pwd)/output:/app/dist homepage:build
