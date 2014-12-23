title: "Linkstash #50"
date: 2014-12-13 13:53:26
tags:
- git
- frontend
- cryptography
- clojure
- thinking
- redis
- javascript
- ios
- slides
- fuse
- video
- angularjs
- memory
- evan
- security
- browser
- best
- md5
category: linkstash
---

- [Самый крутой бро Evan Miller четко сформулировал почему "Python" плох как первый язык. И то почему все мой подходы к Си закончились так и не успев начаться](http://www.evanmiller.org/you-cant-dig-upwards.html) #thinking #Evan
- [2 years with Angular](http://www.fse.guru/2-years-with-angular) *Verdict: good enough (not really)* Почти согласен с выводами, ангуляр не прощает глупость разработчика *(а сейчас во фронтенде это 90% разработчиков)*, но ангуляр дает почти все инструменты для разработки сложного приложения. И да, он не совсем объясняет как правильно пользоваться всеми инструментами, и поэтому иногда получается что отверткой забивают гвозди, а молотком ударяют по пальцам, но при этом инвестировав в изучение оно скорее всего окупится. Я был не сильно рад когда сообщили что angular 2.0  будет не совместим, но потом понял что у них есть все шансы при переписывание учесть все ошибки и сделать годное решение *(при этом точно появятся другие, но жизнь тоже не сразу зародилась)* #angularjs #frontend #thinking
- [Clojure is not for geniuses](http://adambard.com/blog/clojure-is-not-for-geniuses/) #clojure #thinking
- [How I created two images with the same MD5 hash](http://natmchugh.blogspot.ru/2014/10/how-i-created-two-images-with-same-md5.html) или еще раз почему не стоит использовать md5 #cryptography #security #md5
<!-- more -->
- [Рецензия на «Как писать хорошо»](http://sergeykorol.ru/blog/how-to-write-well/) **(не про код)** P.S а так как я необразованный быдлан то мне помогают:
    + http://api.yandex.ru/speller/
    + http://glvrd.ru/
    + http://ru.readability.io/
- [Clustering redis to maximize uptime and scale](https://blog.recurly.com/2014/05/clustering-redis-maximize-uptime-scale) Прошло три года, а я так и не дождался redis cluster. #redis
- [async vs. defer attributes](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html) Простота залог успеха #frontend #browser
- [Apple Shows Love for HTML5 with iOS 8](http://www.sencha.com/blog/apple-shows-love-for-html5-with-ios-8) Очень подробно про новинки WebView в iOS8 #ios #frontend
- [JavaScript Memory Management Masterclass](https://speakerdeck.com/addyosmani/javascript-memory-management-masterclass) Очень, очень подробно, а потом я включил видео... Ах да, это же Эдди ^_^ #frontend #javascript #memory #slides #video
- Самый лучший доклад этого полугодия – [Почему я пишу хороший код, но его не ценят](http://www.youtube.com/watch?v=mGz_MExn6qQ&feature=youtu.be) #video #best #thinking #slides
- [gitfs](http://www.presslabs.com/gitfs/) FUSE драйвер для git!!! Я вот думаю попробовать на папке с документами которые я пишу (в markdown конечно), а то иногда надо историю посмотреть, а dropbox в этом очень плох. P.S кстати почти втащил [s3fs](https://github.com/s3fs-fuse/s3fs-fuse) в продакшен, и пока оно даже работает #git #fuse
