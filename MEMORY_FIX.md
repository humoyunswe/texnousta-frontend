# Решение проблемы с памятью при сборке Docker

## Проблема
Ошибка 137 = недостаточно памяти (OOM - Out of Memory)

## Решение 1: Увеличить swap на сервере

```bash
# Проверить текущий swap
free -h

# Создать swap файл 2GB
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Сделать постоянным (добавить в /etc/fstab)
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

# Проверить
free -h
```

## Решение 2: Сборка с ограничением параллелизма

```bash
# Очистить старые образы
docker system prune -a -f

# Собрать с меньшим использованием памяти
docker-compose build --no-cache --memory 2g
docker-compose up -d
```

## Решение 3: Использовать готовый образ с Docker Hub

Если сервер слабый, можно собрать локально и загрузить:

```bash
# На вашем компьютере
docker build -t texnousta-frontend .
docker tag texnousta-frontend your-dockerhub-username/texnousta-frontend:latest
docker push your-dockerhub-username/texnousta-frontend:latest

# На сервере
docker pull your-dockerhub-username/texnousta-frontend:latest
docker run -d -p 3000:3000 your-dockerhub-username/texnousta-frontend:latest
```

## Решение 4: Проверить доступную память

```bash
# Проверить использование памяти
free -h
df -h

# Проверить процессы
top
htop

# Остановить ненужные сервисы
sudo systemctl stop apache2  # если есть
sudo systemctl stop mysql    # если есть
```

## После исправления:

```bash
# Перезагрузить Docker
sudo systemctl restart docker

# Попробовать снова
docker-compose down
docker-compose up -d --build
```

## Минимальные требования сервера:
- RAM: 2GB (рекомендуется 4GB)
- SWAP: 2GB
- Диск: 10GB свободного места
