FROM nginx:alpine

# Copia o arquivo de configuração do NGINX
COPY nginx.conf /etc/nginx/nginx.conf

# Copia todos os arquivos estáticos para a pasta pública
COPY index.html /usr/share/nginx/html/index.html

# (Opcional) Se tiver mais arquivos:
# COPY . /usr/share/nginx/html