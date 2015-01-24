title: "Linkstash #3 #4"
tags:
  - erlang
  - profiling
  - hash
  - embedded
  - nodejs
  - hint
  - hadoop
  - swarm
  - command
  - web
  - streaming
  - elixir
  - report
  - frontend
  - spark
  - ecto
  - tools
  - docker
  - css
categories: linkstash
date: 2015-01-24 14:35:02
---

- [Erlang для embedded устройств](http://nerves-project.org/gettingstarted.html) круто, но по моему для этого есть более подходящие языки #erlang #embedded
- PhantomJS 2.0 запланирован на 23 января
- [Фёдор Индутный, io.js и столовые приборы](http://codehipsters.com/2015/01/14/indutny-interview.html) #nodejs
- [Improved Fault-tolerance and Zero Data Loss in Spark Streaming](http://databricks.com/blog/2015/01/15/improved-driver-fault-tolerance-and-zero-data-loss-in-spark-streaming.html) #spark #streaming 
- [Command-line tools can be 235x faster than your Hadoop cluster](http://aadrake.com/command-line-tools-can-be-235x-faster-than-your-hadoop-cluster.html) Ну как бы странно использовать hadoop для данных влазящих на одну ноду #tools #Command-line #Hadoop 
- [High Performance Web Components](http://webcomponents.org/presentations/high-performance-web-components/) Вместо того что бы делать веб разработку проще, все тянут одеяло на себя и делают только хуже. У меня уже голова плавится от многообразия всего (которое не работает везде на 100%), что будет через 5 лет?! #frontend #web components
- [Красавица, спортсменка и просто программист](http://dev.by/lenta/main/krasavitsa-sportsmenka-i-prosto-programmist) Интервью с разработчиком PyCharm. Цитата из текста:        
    > если бы полицейские были, как программисты, то по ночам наряжались бы в бэтменов и боролись с преступностью в своё удовольствие

<!-- more -->

- [Способ приаттачить сторадж в запущенный контейнер](http://jpetazzo.github.io/2015/01/13/docker-mount-dynamic-volumes/) Не знаю зачем, может когда-нибудь пригодится #docker #hint
- [Серия из 3-х статей про Docker Swarm](http://technolo-g.com/intro-to-docker-swarm-pt1-overview/) Выглядит это круто, но пока очень сыро. В общем связка docker swarm + machine + ~~новый тул замены fig с поддержкой кластеров~~ compose выглядит перспективно. #docker #swarm
- [Composable Queries with Ecto](http://blog.drewolson.org/blog/2015/01/23/composable-queries-with-ecto/) С одной стороны мне не очень нравится а-ля activerecord стайл т.к я вообще не понимаю в какой SQL запрос развернется + на сложных примерах красота вся пропадает, но с другой запросы вида:
        query = from w in Weather,
            where: w.prcp > 0 or is_nil(w.prcp),
            select: w
    впечатляют, хоть на вид это почти повторение SQL запроса. #elixir #ecto
- [Интервью c мыщъх](http://dev.by/lenta/main/intervyu-s-krisom-kasperski-aka-mysch-h) но конечно хотелось бы прочитать, а еще лучше увидеть полный вариант :)
- [Data-Oriented Hash Table](http://www.reedbeta.com/blog/2015/01/12/data-oriented-hash-table/) #hash table
- [Интересный анализ использования css с 8000 сайтов](http://reports.quickleft.com/css) Я так и знал что большинство забивает на префиксы! #css #report
- [Российская альтернатива сервису OnLive](http://playkey.net/)
- [Profiling Elixir](http://learningelixir.joekain.com/profiling-elixir/) => [Часть 2](http://learningelixir.joekain.com/profiling-elixir-2/) #elixir #profiling