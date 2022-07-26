**docker ps** -> see all containers already started
**docker ps -a** -> see all containers

**docker rm <id/name>** -> remove container
**docker rma <id>** -> remove image

**docker start <image name>** -> start a container
**docker stop <id/name>** -> stop container

**docker-compose up -d** -> start container in background
**docker-compose stop** -> stop container
**docker-compose start** -> restart container
**docker-compose down** -> remove container

**docker exec -it <id/name> /bin/bash** -> enter into container from terminal
**docker logs <id/name> -f** -> logs do container