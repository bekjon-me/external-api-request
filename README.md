# This is laravel and vue 3 template, uses sail.  

To run the project, you have to use default context of the docker. You can switch to default context using this command:
```shell
docker context use default
```

After that, you run this command:
```shell
sail up -d
```
After container build, you have to create tables and seed database if you want using this command:
```shell
sail artisan migrate:fresh
sail artisan db:seed
```

After everything done, you must see your website running on localhost:8000.

