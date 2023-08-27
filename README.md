to create docker image
docker build . -t postgresapits


to create docker container using an existing image
docker run --name postgresapits-container -p 3000:3000 -d postgresapits 


clone a github
git clone url


to stage files
git add .

to commit
git commit -m "initial commit"